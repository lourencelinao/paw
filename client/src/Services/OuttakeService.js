const axios = require('axios')
const url="http://localhost:3000/api/outtake/"

class OuttakeService {
    static getOuttakes(id){
        return new Promise((resolve,reject)=>{
            try{
                let data=[]
                axios
                    .get(`${url}${id}`)
                    .then((response)=>{
                        data=response.data
                        resolve(data)
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
            firstname: outtake.firstname,
            middle_initial: outtake.middle_initial,
            lastname: outtake.lastname
		})
	}	

	static deleteOuttake(id){
        return axios.delete(`${url}${id}`)
    }
}

module.exports = OuttakeService;