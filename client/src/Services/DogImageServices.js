const axios = require('axios')
const url="http://localhost:3000/api/intake/"

class DogImageService {
    static getDogImages(){
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
	
    static postDogImage(dogImage){       
        dogImage.image = dogImage.image.replace(/\'/g, "''")
        
        return axios.post(url, {
            dog_id: dogImage.dog_id,
            image: dogImage.image,
		})
	}	

	static deleteDogImage(id){
        return axios.delete(`${url}${id}`)
    }
}

module.exports = DogImageService;