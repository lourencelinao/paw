const axios = require('axios')
const url="http://localhost:3000/api/intake/"

class intakeService{
    static getIntakes(){
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
	
    static postIntake(intake){
		intake.health_condition=intake.health_condition.replace(/\'/g, "''")


		return axios.post(url, {
			health_condition: intake.health_condition
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


module.exports=intakeService