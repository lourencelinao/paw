const connection = require('../database/database');

const getVaccines = (req, res) => {
    // let sql = `SELECT * FROM vaccination WHERE table_status = 'Active' AND dog_id = ${req.params.id}`
    let sql = `SELECT vaccine.vaccination_id, vaccine.dog_id, vaccine.clinic_id, vaccine.vaccine_name, vaccine.created, clinic.name FROM vaccination as vaccine LEFT JOIN clinic ON vaccine.clinic_id = clinic.clinic_id WHERE vaccine.dog_id = ${req.params.id}`
    connection.query(sql, (err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

const getVaccine = (req, res) => {
    // let sql = `SELECT * FROM vaccination WHERE table_status = 'Active' AND dog_id = ${req.params.id}`
    let sql = `SELECT vaccine.vaccination_id, vaccine.dog_id, vaccine.clinic_id, vaccine.vaccine_name, vaccine.created, clinic.name FROM vaccination as vaccine LEFT JOIN clinic ON vaccine.clinic_id = clinic.clinic_id WHERE vaccine.vaccination_id = ${req.params.id}`
    connection.query(sql, (err, result)=>{
        if(err) throw err
        res.send(result)
    })
}

const patchVaccine = (req, res) => {
    let sql = `UPDATE vaccination SET clinic_id = ${req.body.clinic_id}, vaccine_name = '${req.body.vaccine_name}' WHERE vaccination_id = ${req.params.id}`
    connection.query(sql, (err, data) => {
        if(err) throw err
        res.send()
    })
}


const addVaccine = (req, res) => {
    connection.query("INSERT INTO vaccination (dog_id, clinic_id, vaccine_name) VALUES ('"+req.body.dog_id+"','"+req.body.clinic_id+"','"+req.body.vaccine_name+"')", (err, result)=>{
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
    getVaccine,
    addVaccine,
    deleteVaccine,
    patchVaccine
}