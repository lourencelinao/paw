const axios = require('axios')
const url="http://localhost:3000/api/intake/"

class VaccinationService {
    static getVaccinations(){
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
	
    static postVaccination(vaccination){       
        vaccination.vaccine_name = vaccination.vaccine_name.replace(/\'/g, "''")
        
        return axios.post(url, {
            dog_id: vaccination.dog_id,
            clinic_id: vaccination.clinic_id,
            vet_id: vaccination.vet_id,
            vaccine_name: vaccination.vaccine_name,            
		})
	}	

	static deleteVaccination(id){
        return axios.delete(`${url}${id}`)
    }
}

module.exports = VaccinationService;