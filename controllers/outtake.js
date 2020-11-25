const connection = require('../../database/database');

const getOuttake = (req, res) => {
    connection.query("SELECT * FROM outtake WHERE table_status = 'Active'", (err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

const addOuttake = (req, res) => {
    connection.query("INSERT INTO outtake (dog_id, outtakeable_id, outtakeable_type) VALUES ('"+req.body.dog_id+"', '"+req.body.outtakeable_id+"', '"+req.body.outtakeable_type+"')", (err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

const deleteOuttake = (req, res) => {
    connection.query("UPDATE outtake SET table_status = 'Deleted', deleted = now() WHERE outtake_id = '"+req.body.outtake_id+"'",(err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

module.exports = {
    getOuttake,
    addOuttake,
    deleteOuttake
}