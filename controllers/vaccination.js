const connection = require('../../database/database');

const getVaccines = (req, res) => {
    connection.query("SELECT * FROM vaccination WHERE table_status = 'Active'", (err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

const addVaccine = (req, res) => {
    connection.query("INSERT INTO vaccination (dog_id, clinic_id, vet_id, vaccine_name, table_status) VALUES ('"+req.body.dog_id+"','"+req.body.clinic_id+"','"+req.body.vet_id+"','"+req.body.vaccine_name+"','"+req.body.table_status+"')", (err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

const deleteVaccine = (req, res) => {
    connection.query("UPDATE action SET table_status = 'Deleted', deleted = now() WHERE vaccination_id = '"+req.body.vaccination_id+"'",(err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

module.exports = {
    getVaccines,
    addVaccine,
    deleteVaccine
}