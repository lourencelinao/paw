const axios = require('axios')

const url = 'http://localhost:3000/api/user/' 

class UserService{
    static getUser(email){
        return new Promise((resolve,reject)=>{
            try{
                let data=[]
                axios
                    .get(`${url}${email}`)
                    .then((response)=>{
                        data = response.data
                        resolve(data)
                    })
                    .catch((err) => console.error(err.message))
            }catch (err) {
                reject(err)
            }
        })
    }

    static postUser(user){
        user.email=user.email.replace(/\'/g, "''")
        // user.password=user.password.replace(/\'/g, "''")

        return axios.post(url,{
            user_type:user.role,
            email: user.email
        })

    }


    static patchUserEmail(email, user_id){
        email = email.replace(/\'/g, "''")

        return axios.patch(`${url}${user_id}/updateUserEmail`,{
            email: email
        })
    }

    static patchUserPassword(password, user_id){
        password = password.replace(/\'/g, "''")

        return axios.patch(`${url}${user_id}/patchUserPassword`,{
            password: password
        })
    }


    static deleteUser(user){
        return axios.delete(`${url}${user.id}`)
    }
}

module.exports=UserService
