const connection = require('../../database/database');

const getClinics = (req, res) => {
    connection.query("SELECT * FROM clinic WHERE table_status = 'Active'", (err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

const addClinic = (req, res) => {
    connection.query("INSERT INTO clinic (name, address1, city, province, contact_number, email_address, table_status) VALUES ('"+req.body.name+"','"+req.body.address+"','"+req.body.city+"','"+req.body.province+"',"+req.body.contact_number+",'"+req.body.email_address+"','"+req.body.table_status+"')", (err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

const deleteClinic = (req, res) => {
    connection.query("UPDATE clinic SET table_status = 'Deleted', deleted = now() WHERE clinic_id = '"+req.body.clinic_id+"'",(err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

module.exports = {
    getClinics,
    addClinic,
    deleteClinic
}