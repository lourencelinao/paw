const con = require('../../database/database');

const addDog_image = (req, res) => {
    if(req.files){
        let file = req.files.image;
        let img_name = file.name;
        
        if(file.mimetype == "image/jpeg" || file.mimetype == "image/png"){
            file.mv('directory'+file.name, (err)=>{
                if(err) throw err;

                let sql = `INSERT INTO dog_image (dog_id, image) 
                            VALUES (${req.body.dog_id}, ${img_name})`;

                con.query(sql,(err, result)=>{
                    if(err) throw err;
                });
            })
        }        
    }    
};

const deleteDog_image = (req, res) => {
    let sql = `UPDATE dog_image 
                SET table_status = 'Deleted', deleted = now() 
                WHERE dog_image_id = ${req.params.id}`;
    con.query(sql,(err, result)=>{
        if(err) throw err;
    });
};

module.exports = {
    addDog_image,
    deleteDog_image
};

