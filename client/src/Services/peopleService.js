const axios = require('axios')

const url = 'http://localhost:3000/api/person/' 

class PeopleService{
    static getPeople(){
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
    static getPerson(id){
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

    static postPeople(people){
        people.first_name=people.first_name.replace(/\'/g, "''")
        people.last_name=people.last_name.replace(/\'/g, "''")
        people.contact_number=people.contact_number.replace(/\'/g, "''")
        people.email_address=people.email_address.replace(/\'/g, "''")
        people.address1=people.address1.replace(/\'/g, "''")
        people.address2=people.address2.replace(/\'/g, "''")
        people.city=people.city.replace(/\'/g, "''")

        return axios.post(url,{
            first_name:people.first_name,
            last_name:people.last_name,
            middle_initial:people.middle_initial,
            contact_number:people.contact_number,
            email_address:people.email_address,
            address1:people.address1,
            address2:people.address2,
            city:people.city
        })

    }

    static updatePersonEmail(email, person_id){
        email = email.replace(/\'/g, "''")
        return axios.patch(`${url}${person_id}/updatePersonEmail`, {
            email_address: email
        })
    }


    static patchPeople(people){
        people.first_name=people.first_name.replace(/\'/g, "''")
        people.last_name=people.last_name.replace(/\'/g, "''")
        people.contact_number=people.contact_number.replace(/\'/g, "''")
        people.email_address=people.email_address.replace(/\'/g, "''")
        people.address1=people.address1.replace(/\'/g, "''")
        people.address2=people.address2.replace(/\'/g, "''")
        people.city=people.city.replace(/\'/g, "''")

        return axios.patch(`${url}${People.id}`,{
            first_name:people.first_name,
            last_name:people.last_name,
            middle_initial:people.middle_initial,
            contact_number:people.contact_number,
            email_address:people.email_address,
            address1:people.address1,
            address2:people.address2,
            city:people.city
        })
    }

    static deleteUser(people){
        return axios.delete(`${url}${people.id}`)
    }
}

module.exports=PeopleService