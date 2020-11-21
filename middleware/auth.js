require('dotenv').config() // dotenv
const jwt = require('jsonwebtoken')
const pool = require('../database/database')
const bcrypt = require('bcryptjs')
const salt = 10

// generates a jwt token
const newToken = (user) => {
	return jwt.sign(
		{ user_id: user.user_id, email: user.email, user_type: user.user_type },
		process.env.JWT_TEMP_SECRETKEY,
		{
			expiresIn: '15m',
		}
	)
}

const verifyToken = (token) => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, process.env.JWT_TEMP_SECRETKEY, (err, payload) => {
			if (err) return reject(err)
			resolve(payload)
		})
	})
}

const signup = (req, res) => {
	if (!req.body.email || !req.body.password) {
		return res.status(400).send({ message: 'Input fields are missing' })
	}
	try {
		let password = bcrypt.hashSync(req.body.password, salt)
		let sql = `INSERT INTO users(email, password) VALUES('${req.body.email}', '${password}')`
		connection.query(sql, (err, data, fields) => {
			if (err) throw err
			if (data) {
				// const token = newToken(data.insertId)
				res.send({ message: 'Sign up successful' })
			}
		})
	} catch (err) {
		console.error(err)
		return res.end()
	}
}

const signin = (req, res) => {
	if (!req.body.email || !req.body.password) {
		return res.status(400).send({ message: 'Input fields are missing' })
	}
	let sql = `SELECT * FROM users WHERE email = '${req.body.email}'`
	connection.query(sql, (err, data) => {
		if (err) throw err
		if (data[0]) {
			bcrypt.compare(
				req.body.password,
				data[0].password,
				(err, response) => {
					if (response) {
						const token = newToken(data[0])
						const refreshToken = jwt.sign(
							{ id: data[0].id },
							process.env.JWT_REFRESH_SECRETKEY
						)
						console.log(req.headers)
						res.status(200).send({ token })
					} else {
						res.send({ message: 'Incorrect password' })
					}
				}
			)
		} else {
			res.send({ message: 'User does not exist' })
		}
	})
}

const authRole = (roleArray) => (req, res, next) => {
	if (!req.user) {
		return res.status(401).send({ message: 'Not authorized' })
	}

	const authorized = false
	// loop the roleArray to see if the user has the authorized role for the api
	roleArray.forEach((role) => {
		authorized = req.user.user_type === role
	})

	if (authorized) {
		return next()
	}

	return res.status(401).send({ message: 'Not authorized' })
}

// same thing
// const authRole = function (roleArray) {
//     return function (req, res, next) {

//     }
// }

const protect = async (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(401).send({ message: 'Not authorized' })
	}
	let token = req.headers.authorization.split('Bearer ')[1]

	if (!token) {
		return res.status(401).send({ message: 'Not authorized to do this' })
	}

	try {
		let payload = await verifyToken(token)
		let sql = `SELECT user_id, user_type, email FROM user WHERE user_id = ${payload.user_id}`
		pool.query(sql, (err, data, fields) => {
			if (err) throw err
			if (data[0]) {
				req.user = data[0]
				next()
			}
		})
	} catch (err) {
		console.error(err)
		return res.status(401).send({ message: 'Not authorized to do this' })
	}
}

module.exports = {
	signup,
	signin,
	authRole,
	protect,
	newToken,
	verifyToken,
}
