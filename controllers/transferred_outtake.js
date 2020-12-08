const con = require('../../database/database');

const getTransferred_outtake = (req, res) => {
    let sql = `SELECT * 
                FROM transferred_outtake 
                WHERE table_status = 'Active'`;
    con.query(sql, (err, result)=>{
        if(err) throw err;
        res.send(result);
    });
};

const addTransferred_outtake = (req, res) => {
    let sql = `INSERT INTO transferred_outtake (outtake_id, shelter_name, address1, address2, city, province, contact_number, email_address) 
                VALUES (${req.body.outtake_id}, 
                        '${req.body.shelter_name}', 
                        '${req.body.address1}', 
                        '${req.body.address2}', 
                        '${req.body.city}', 
                        '${req.body.province}', 
                        '${req.body.contact_number}', 
                        '${req.body.email_address}')`;
    con.query(sql, (err, result)=>{
        if(err) throw err;
    });
};

const deleteTransferred_outtake = (req, res) => {
    let sql = `UPDATE transferred_outtake 
                SET table_status = 'Deleted', deleted = now() 
                WHERE transferred_id = ${req.params.id}`;
    con.query(sql, (err, result)=>{
        if(err) throw err;
    });
};

module.exports = {
    getTransferred_outtake,
    addTransferred_outtake,
    deleteTransferred_outtake
};