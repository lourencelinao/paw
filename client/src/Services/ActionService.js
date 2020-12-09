const axios = require('axios')
const url="http://localhost:3000/api/intake/"

class ActionService {
    static getActions(){
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
	
    static postAction(action){       
        action.table_name = action.table_name.replace(/\'/g, "''")
        
        return axios.post(url, {
            user_id: action.user_id,
            table_id: action.table_id,
            table_name: action.table_name
		})
	}	
}

module.exports = ActionService;