const axios = require('axios')
const url="http://localhost:3000/api/clinic/"

class ClinicService {
    static getClinics(){
        return new Promise((resolve,reject)=>{
            try{
                let data = []
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
	
    static postClinic(clinic){       
        clinic.name = clinic.name.replace(/\'/g, "''")
        clinic.address1 = clinic.address1.replace(/\'/g, "''")
        clinic.city = clinic.city.replace(/\'/g, "''")
        clinic.province = clinic.province.replace(/\'/g, "''")
        clinic.contact_number = clinic.contact_number.replace(/\'/g, "''")
        clinic.email_address = clinic.email_address.replace(/\'/g, "''")
        
        return axios.post(url, {
            name: clinic.name,
            address1: clinic.address1,
            city: clinic.city,
            province: clinic.province,
            contact_number: clinic.contact_number,
            email_address: clinic.email_address,
		})
	}	

    // static patchDog(clinic){
    //     clinic.name = clinic.name.replace(/\'/g, "''")
    //     clinic.address1 = clinic.address1.replace(/\'/g, "''")
    //     clinic.address2 = clinic.address2.replace(/\'/g, "''")
    //     clinic.city = clinic.city.replace(/\'/g, "''")
    //     clinic.province = clinic.province.replace(/\'/g, "''")
    //     clinic.contact_number = clinic.contact_number.replace(/\'/g, "''")
    //     clinic.email_address = clinic.email_address.replace(/\'/g, "''")
        

    //     return axios.patch(`${url}${clinic.id}`, {
    //         name: clinic.name,
    //         address1: clinic.address1,
    //         address2: clinic.address2,
    //         city: clinic.city,
    //         province: clinic.province,
    //         contact_number: clinic.contact_number,
    //         email_address: clinic.email_address,
    //     })
    // }

	static deleteClinic(id){
        return axios.delete(`${url}${id}`)
    }
}

module.exports = ClinicService;