const con = require('../../database/database');

const addDog_image = (req, res) => {
    let sql = `INSERT INTO dog_image (dog_id, image) 
                VALUES (${req.body.dog_id}, ${req.body.image})`;
    con.query(sql,(err, result)=>{
        if(err) throw err;
    });
};

const deleteDog_image = (req, res) => {
    let sql = `UPDATE dog_image 
                SET table_status = 'Deleted', deleted = now() 
                WHERE dog_image_id = '${req.body.dog_image_id}'`;
    con.query(sql,(err, result)=>{
        if(err) throw err;
    });
};

module.exports = {
    addDog_image,
    deleteDog_image
};

