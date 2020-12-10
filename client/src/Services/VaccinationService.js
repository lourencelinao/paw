const axios = require('axios')
const url="http://localhost:3000/api/vaccine/"

class VaccinationService {
    static getVaccinations(id){
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
    
    static getVaccination(id){
        return new Promise((resolve,reject)=>{
            try{
                let data=[]
                axios
                    .get(`${url}${id}/getVaccine`)
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
	
    static postVaccination(vaccination){       
        vaccination.vaccine_name = vaccination.vaccine_name.replace(/\'/g, "''")
        
        return axios.post(url, {
            dog_id: vaccination.dog_id,
            clinic_id: vaccination.clinic_id,
            vaccine_name: vaccination.vaccine_name,            
		})
	}	
    static patchVaccination(vaccination){       
        vaccination.vaccine_name = vaccination.vaccine_name.replace(/\'/g, "''")
        
        return axios.patch(`${url}${vaccination.vaccination_id}`, {
            clinic_id: vaccination.clinic_id,
            vaccine_name: vaccination.vaccine_name,            
		})
	}	

	static deleteVaccination(id){
        return axios.delete(`${url}${id}`)
    }
}

module.exports = VaccinationService;