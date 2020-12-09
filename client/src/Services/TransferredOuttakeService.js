const axios = require('axios')
const url="http://localhost:3000/api/intake/"

class TransferredOuttakeService {
    static getTransferredOuttakes(){
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
	
    static postTransferredOuttake(transferredOuttake){
        transferredOuttake.shelter_name = transferredOuttake.shelter_name.replace(/\'/g, "''")
        transferredOuttake.address1 = transferredOuttake.address1.replace(/\'/g, "''")
        transferredOuttake.address2 = transferredOuttake.address2.replace(/\'/g, "''")
        transferredOuttake.city = transferredOuttake.city.replace(/\'/g, "''")
        transferredOuttake.province = transferredOuttake.province.replace(/\'/g, "''")
        transferredOuttake.contact_number = transferredOuttake.contact_number.replace(/\'/g, "''")
        transferredOuttake.email_address = transferredOuttake.email_address.replace(/\'/g, "''")

        return axios.post(url, {
            outtake_id: transferredOuttake.outtake_id,
            shelter_name: transferredOuttake.shelter_name,
            address1: transferredOuttake.address1,
            address2: transferredOuttake.address2,
            city: transferredOuttake.city,
            province: transferredOuttake.province,
            contact_number: transferredOuttake.contact_number,
            email_address: transferredOuttake.email_address
		})
	}	

	static deleteTransferredOuttake(id){
        return axios.delete(`${url}${id}`)
    }
}

module.exports = TransferredOuttakeService;