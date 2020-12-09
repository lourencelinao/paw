// const Airtable = require('airtable');
// Airtable.configure({
//     endpointUrl: 'https://api.airtable.com',
//     apiKey: 'YOUR_API_KEY'
// });
// const base = Airtable.base('appofDSPsJFzAJsL6');

// base('Adoption Table').select({
//     // Selecting the first 3 records in Grid view:
//     maxRecords: 3,
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.

//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('Firstname'));
//     });

//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();

// }, function done(err) {
//     if (err) { console.error(err); return; }
// });

const axios = require('axios')
const API = 'keyGTw5Mf4RE8L8jO'
axios.defaults.headers.common = { Authorization: `Bearer ${API}` }
let maxRecords = 10
let url = `https://api.airtable.com/v0/appzYvxa9947d67Wf/Volunteer%20Table?maxRecords=${maxRecords}`

class VolunteerApplicationService {
	static getVolunteers() {
		return new Promise((resolve, reject) => {
			try {
				let data = []
				axios
					.get(url)
					.then((response) => {
						data = response.data
						resolve(data)
					})
					.catch((err) => {
						console.error(err.message)
						reject(err)
					})
			} catch (err) {
				console.error(err.message)
			}
		})
	}

	static getVolunteer(id) {
		return new Promise((resolve, reject) => {
			try {
				let data = []
				axios
					.get(
						`https://api.airtable.com/v0/appzYvxa9947d67Wf/Volunteer%20Table/${id}`
					)
					.then((response) => {
						data = response.data
						resolve(data)
					})
					.catch((err) => {
						console.error(err.message)
					})
			} catch (err) {
				console.error(err.message)
			}
		})
	}
}

module.exports = VolunteerApplicationService
