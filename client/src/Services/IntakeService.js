const axios = require('axios')
const url="http://localhost:3000/api/intake/"

class IntakeService{
    static getIntakes(){
        return new Promise((resolve,reject)=>{
            try{
                let data=[]
                axios
                    .get(url)
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

    static getIntake(id){
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
    

	
    static postIntake(intake){
		// intake.health_condition=intake.health_condition.replace(/\'/g, "''")


		return axios.post(url, {
            dog_id: intake.dog_id,
            intakeable_type: intake.intakeable_type,
            firstname: intake.firstname,
            middle_initial: intake.middle_initial,
            lastname: intake.lastname,
            attendant: intake.attendant
		})
	}
	
	static patchIntake(intake){
		intake.health_condition=intake.health_condition.replace(/\'/g, "''")


		return axios.patch(`${url}${intake.id}`, {
			health_condition: intake.health_condition
		})
	}
	

	static deleteIntake(intake){
        return axios.delete(`${url}${intake.id}`)
    }



}


module.exports= IntakeService