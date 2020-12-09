const axios = require('axios')
const url="http://localhost:3000/api/intake/"

class OuttakeService {
    static getOuttakes(){
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
	
    static postOuttake(outtake){
		return axios.post(url, {
            dog_id: outtake.dog_id,
            outtakeable_type: outtake.outtakeable_type,
		})
	}	

	static deleteOuttake(id){
        return axios.delete(`${url}${id}`)
    }
}

module.exports = OuttakeService;