const connection = require('../../database/database');

const getTransferred_outtake = (req, res) => {
    connection.query("SELECT * FROM transferred_outtake WHERE table_status = 'Active'", (err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

const addTransferred_outtake = (req, res) => {
    connection.query("INSERT INTO transferred_outtake (shelter_name, address1, address2, city, province, contact_number, email_address) VALUES ('"+req.body.shelter_name+"', '"+req.body.address1+"', '"+req.body.address2+"', '"+req.body.city+"', '"+req.body.province+"', '"+req.body.contact_number+"', '"+req.body.email_address+"')", (err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

const deleteTransferred_outtake = (req, res) => {
    connection.query("UPDATE transferred_outtake SET table_status = 'Deleted', deleted = now() WHERE transferred_id = '"+req.body.outtake_id+"'",(err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

module.exports = {
    getTransferred_outtake,
    addTransferred_outtake,
    deleteTransferred_outtake
}