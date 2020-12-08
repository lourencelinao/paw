const con = require('../../database/database');

const getAdopted_outtake = (req, res) => {
    let sql = `SELECT * 
                FROM adopted_outtake 
                WHERE table_status = 'Active'`;
    con.query(sql, (err, result)=>{
        if(err) throw err;
        res.send(result);
    });
};

const addAdopted_outtake = (req, res) => {
    let sql = `INSERT INTO adopted_outtake (person_id, outtake_id) 
                VALUES (${req.body.person_id}, ${req.body.outtake_id})`;
    con.query(sql, (err, result)=>{
        if(err) throw err;
    });
};

const deleteAdopted_outtake = (req, res) => {
    let sql = `UPDATE adopted_outtake 
                SET table_status = 'Deleted', deleted = now() 
                WHERE adopted_id = ${req.body.outtake_id}`;
    con.query(sql,(err, result)=>{
        if(err) throw err;
    });
};

module.exports = {
    getAdopted_outtake,
    addAdopted_outtake,
    deleteAdopted_outtake
};