const axios = require('axios')

const url = 'http://localhhost:3000/api/veterinarian/' 

class veterinarianService{
    static getVet(){
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

    static postVet(veterinarian){

        return axios.post(url,{
            table_status:veterinarian.table_status
        })

    }


    static patchVet(veterinarian){
        

        return axios.patch(`${url}${veterinarian.id}`,{
            table_status:veterinarian.table_status
        })
    }

    static deleteVet(veterinarian){
        return axios.delete(`${url}${veterinarian.id}`)
    }
}

module.exports=veterinarianService