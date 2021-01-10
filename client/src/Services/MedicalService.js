const axios = require('axios')
const url = 'http://localhost:3000/api/medical/'

class medicalService {
	static getMedicals(id) {
		return new Promise((resolve, reject) => {
			try {
				let data = []
				axios
					.get(`${url}${id}/menu`)
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

	static getMedical(id) {
		return new Promise((resolve, reject) => {
			try {
				let data = []
				axios
					.get(`${url}${id}/getOne`)
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

	static postMedical(medical) {
		medical.description = medical.description.replace(/\'/g, "''")
		medical.diagnosis = medical.diagnosis.replace(/\'/g, "''")
		medical.test_performed = medical.test_performed.replace(/\'/g, "''")
		medical.action = medical.action.replace(/\'/g, "''")
		medical.medications = medical.medications.replace(/\'/g, "''")
		medical.comment = medical.comment.replace(/\'/g, "''")

		return axios.post(url, {
            dog_id: medical.dog_id,
            clinic_id: medical.clinic_id,
			description: medical.description,
			diagnosis: medical.diagnosis,
			test_performed: medical.test_performed,
			action: medical.action,
			medications: medical.medications,
			comment: medical.comment,
		})
	}

	static patchMedical(medical) {
		medical.description = medical.description.replace(/\'/g, "''")
		medical.diagnosis = medical.diagnosis.replace(/\'/g, "''")
		medical.test_performed = medical.test_performed.replace(/\'/g, "''")
		medical.action = medical.action.replace(/\'/g, "''")
		medical.medications = medical.medications.replace(/\'/g, "''")
		medical.comment = medical.comment.replace(/\'/g, "''")

		return axios.patch(`${url}${medical.medical_id}`, {
			dog_id: medical.dog_id,
            clinic_id: medical.clinic_id,
			description: medical.description,
			diagnosis: medical.diagnosis,
			test_performed: medical.test_performed,
			action: medical.action,
			medications: medical.medications,
			comment: medical.comment,
		})
	}

	static deleteIntake(medical) {
		return axios.delete(`${url}${medical.id}`)
	}
}

module.exports = medicalService
