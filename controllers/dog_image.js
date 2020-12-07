const connection = require('../../database/database');

const addDog_image = (req, res) => {
    connection.query("INSERT INTO dog_image (dog_id, image) VALUES ('"+req.body.dog_id+"', '"+req.body.image+"')",(err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

const deleteDog_image = (req, res) => {
    connection.query("UPDATE dog_image SET table_status = 'Deleted', deleted = now() WHERE dog_image_id = '"+req.body.dog_image_id+"'",(err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

module.exports = {
    addDog_image,
    deleteDog_image
}

