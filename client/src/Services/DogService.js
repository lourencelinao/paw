const axios = require('axios')

const url = 'http://localhost:3000/api/dogs/'

class DogService {
	static getDogs() {
		return new Promise((resolve, reject) => {
			try {
				let data = []
				axios
					.get(url)
					.then((response) => {
						data = response.data
						resolve(data)
					})
					.catch((err) => console.error(err.message))
			} catch (err) {
				reject(err)
			}
		})
	}

	static getHealthyDogs() {
		return new Promise((resolve, reject) => {
			try {
				let data = []
				axios
					.get(`${url}healthy`)
					.then((response) => {
						data = response.data
						resolve(data)
					})
					.catch((err) => console.error(err.message))
			} catch (err) {
				reject(err)
			}
		})
	}

	static getDog(id) {
		return new Promise((resolve, reject) => {
			try {
				let data = []
				axios
					.get(`${url}${id}`)
					.then((response) => {
						data = response.data
						resolve(data)
					})
					.catch((err) => console.error(err.message))
			} catch (err) {
				reject(err)
			}
		})
	}

	static patchAdoption(id) {
		return axios.patch(`${url}adopted/${id}`, {
			status: 'Adopted'
		})
	}

	static getDogByName(dog_name) {
		return new Promise((resolve, reject) => {
			try {
				let data = []
				axios
					.get(`${url}name/${dog_name}`)
					.then((response) => {
						data = response.data
						resolve(data)
					})
					.catch((err) => console.error(err.message))
			} catch (err) {
				reject(err)
			}
		})
	}

	static postDog(
		dog
    )
    {
		dog.dog_name = dog.dog_name.replace(/\'/g, "''")
		dog.breed = dog.breed.replace(/\'/g, "''")
		dog.color = dog.color.replace(/\'/g, "''")
		dog.marks = dog.marks.replace(/\'/g, "''")
		dog.description = dog.description.replace(/\'/g, "''")

		return axios.post(url, {
			dog_name: dog.dog_name,
			breed: dog.breed,
			birthday: dog.birthday,
			sex: dog.sex,
			weight: dog.weight,
			color: dog.color,
			marks: dog.marks,
			aggressive: dog.aggressive,
			trained: dog.trained,
			status: dog.status,
			table_status: dog.table_status,
			description: dog.description,
		})
    }

    // dog_name,
	// 	breed,
	// 	birthday,
	// 	sex,
	// 	weight,
	// 	color,
	// 	marks,
	// 	aggressive,
	// 	trained,
	// 	status,
	// 	table_status,
	// 	description
    

    static patchDog(dog){
        dog.dog_name = dog.dog_name.replace(/\'/g, "''")
		dog.breed = dog.breed.replace(/\'/g, "''")
		dog.color = dog.color.replace(/\'/g, "''")
		dog.marks = dog.marks.replace(/\'/g, "''")
		dog.description = dog.description.replace(/\'/g, "''")

        return axios.patch(`${url}${dog.dog_id}`, {
            dog_name: dog.dog_name,
			breed: dog.breed,
			birthday: dog.birthday,
			sex: dog.sex,
			weight: dog.weight,
			color: dog.color,
			marks: dog.marks,
			aggressive: dog.aggressive,
			trained: dog.trained,
			status: dog.status,
			description: dog.description,
        })
    }

    static deleteDog(id){
        return axios.delete(`${url}${id}`)
    }
    //  class end
}

module.exports = DogService
