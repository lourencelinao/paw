const axios = require('axios')
const url="http://localhost:3000/api/intake/"

class AdoptedOuttakeService {
    static getAdoptedOuttakes(){
        return new promise((resolve,reject)=>{
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
	
    static postAdoptedOuttake(adoptedOuttake){        
        return axios.post(url, {
            person_id: adoptedOuttake.person_id,
            outtake_id: adoptedOuttake.outtake_id,        
		})
	}	

	static deleteAdoptedOuttake(id){
        return axios.delete(`${url}${id}`)
    }
}

module.exports = AdoptedOuttakeService;