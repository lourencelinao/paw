
const conn = require('../database/database');




//get all active users
const getUser = (req,res) =>{
  let sql = `SELECT * from users WHERE email ='${req.params.email}'`;
  console.log(sql)
  conn.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
};


//insert
const addUser = (req,res)=>{
  // let sql = `INSERT INTO users (person_id,user_type,password,image,table_status)
  //            VALUES (${req.body.person_id},${req.body.user_type},${req.body.password},${req.body.image},${req.body.table_status})`;
  let sql = `INSERT INTO person(email_address) VALUES('${req.body.email}')`
  conn.query(sql, (err, data) => {
    if(err) throw err
    console.log('success')
    let sql2 = `INSERT INTO users(person_id, email, user_type) VALUES(${data.insertId}, '${req.body.email}', '${req.body.role}')`
    conn.query(sql2, (err, data) => {
      if(err) throw err
      return res.send()
    })
  }) 
};

const updateUserEmail = (req, res) => {
  let sql = `UPDATE users SET email = '${req.body.email}' WHERE user_id = ${req.params.id}`
  conn.query(sql, (err, data) => {
    if(err) throw err
    res.send()
  })
}

const patchUserPassword = (req, res) => {
  let sql = `UPDATE users SET password = '${req.body.password}' WHERE user_id = ${req.params.id}`
  conn.query(sql, (err, data) => {
    if(err) throw err
    res.send()
  })
}

//update
const updateUser = (req,res) =>{
  let sql = `UPDATE users
              SET person_id = '${req.body.person_id}',
                  user_type = '${req.body.user_type}',
                  password = '${req.body.password}',
                  image = '${req.body.image}',
                  table_status = '${req.body.table_status}',
                  update = now()
                WHERE user_id = ${req.params.id}`;
    conn.query(sql,(err,result)=>{
      if(err) throw err;
    });
};


//delete a record
const deleteUser = (req,res) => {
  let sql = `UPDATE  users
             SET table_status='Deleted',deleted = now(); 
             WHERE user_id = $(req.params.id)`;
  conn.query(sql,(err,result)=>{
      if(err) throw err;
  });
};

module.exports = {
  getUser,
  addUser,
  updateUser,
  deleteUser,
  updateUserEmail,
  patchUserPassword
}
