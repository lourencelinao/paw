const connection = require('../../database/database');

const getAdopted_outtake = (req, res) => {
    connection.query("SELECT * FROM adopted_outtake WHERE table_status = 'Active'", (err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

const addAdopted_outtake = (req, res) => {
    connection.query("INSERT INTO adopted_outtake (person_id) VALUES ('"+req.body.person_id+"')", (err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

const deleteAdopted_outtake = (req, res) => {
    connection.query("UPDATE adopted_outtake SET table_status = 'Deleted', deleted = now() WHERE adopted_id = '"+req.body.outtake_id+"'",(err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

module.exports = {
    getAdopted_outtake,
    addAdopted_outtake,
    deleteAdopted_outtake
}