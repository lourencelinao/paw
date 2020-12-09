const axios = require('axios')

const url = 'http://localhhost:3000/api/user/' 

class userService{
    static getUser(){
        return new Promise((resolve,reject)=>{
            try{
                let Data=[]
                axios
                    .get(url)
                    .then((response)=>{
                        data=response.data
                    })
                    .catch((err) => console.error(err.message))
            }catch (err) {
                reject(err)
            }
        })
    }

    static postUser(user){
        user.password=user.password.replace(/\'/g, "''")

        return axios.post(url,{
            user_type:user.user_type,
            password:user.password,
            table_status:user.table_status
        })

    }


    static patchUser(user){
        user.password=user.password.replace(/\'/g, "''")

        return axios.patch(`${url}${user.id}`,{
            user_type:user.user_type,
            password:user.password,
            table_status:user.table_status
        })
    }

    static deleteUser(user){
        return axios.delete(`${url}${user.id}`)
    }
}

module.exports=userService