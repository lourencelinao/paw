const con = require('../../database/database');

const getOuttake = (req, res) => {
    let sql = `SELECT * 
                FROM outtake 
                WHERE table_status = "Active"`;
    con.query(sql, (err, result)=>{
        if(err) throw err;
        res.send(result);
    });
};

const addOuttake = (req, res) => {
    let sql = `INSERT INTO outtake (dog_id, outtakeable_type) 
                VALUES (${req.body.dog_id}, '${req.body.outtakeable_type}');`
    con.query(sql, (err, result)=>{
        if(err) throw err;
    });
};

const deleteOuttake = (req, res) => {
    let sql = `UPDATE outtake 
                SET table_status = 'Deleted', deleted = now() 
                WHERE outtake_id = ${req.params.id}`;
    con.query(sql, (err, result)=>{
        if(err) throw err;
    })
}

module.exports = {
    getOuttake,
    addOuttake,
    deleteOuttake
}