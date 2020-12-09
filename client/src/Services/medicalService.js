const axios = require('axios')
const url="http://localhost:3000/api/medical/"

class medicalService{
    static getMedical(){
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

    static postMedical(medical){
        medical.description=medical.description.replace(/\'/g, "''")
        medical.diagnosis=medical.diagnosis.replace(/\'/g, "''")
        medical.test_performed=medical.test_performed.replace(/\'/g, "''")
        medical.action= medical.action.replace(/\'/g, "''")
        medical.medciation= medical.medciation.replace(/\'/g, "''")
        medical.comment=medical.comment.replace(/\'/g, "''")

        return axios.post(url,{
            description:medical.description,
            diagnosis:medical.diagnosis,
            test_performed:medical.test_performed,
            action:medical.action,
            medication:medical.medciation,
            comment:medical.comment
        })

    }


    static patchMedical(medical){
        medical.description=medical.description.replace(/\'/g, "''")
        medical.diagnosis=medical.diagnosis.replace(/\'/g, "''")
        medical.test_performed=medical.test_performed.replace(/\'/g, "''")
        medical.action= medical.action.replace(/\'/g, "''")
        medical.medciation= medical.medciation.replace(/\'/g, "''")
        medical.comment=medical.comment.replace(/\'/g, "''")

        return axios.patch(`${url}${medical.id}`,{
            description:medical.description,
            diagnosis:medical.diagnosis,
            test_performed:medical.test_performed,
            action:medical.action,
            medication:medical.medciation,
            comment:medical.comment
        })
    }

    static deleteIntake(medical){
        return axios.delete(`${url}${medical.id}`)
    }
}

module.exports=medicalService