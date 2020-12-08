const con = require('../../database/database');

const getDog = (req, res) => {
    let sql = `SELECT * 
                FROM dog 
                WHERE table_status = 'Active'`;
    con.query(sql, (err, result)=>{
        if(err) throw err;
        res.send(result);
    });
};

const addDog = (req, res) => {
    let sql = `INSERT INTO dog (dog_name, breed, birthday, sex, weight, color, marks, aggressive, trained, status, description) 
                VALUES ('${req.body.dog_name}', 
                        '${req.body.breed}', 
                        '${req.body.birthday}', 
                        '${req.body.sex}', 
                        ${req.body.weight}, 
                        '${req.body.color}', 
                        '${req.body.marks}', 
                        '${req.body.aggressive}', 
                        '${req.body.trained}', 
                        '${req.body.status}', 
                        '${req.body.description}')`;
    con.query(sql, (err, result)=>{
        if(err) throw err;
    });
};

const updateDog = (req, res) => {
    let sql = `UPDATE dog 
                SET dog_name = '${req.body.dog_name}', 
                    breed = '${req.body.breed}', 
                    birthday = '${req.body.birthday}', 
                    sex = '${req.body.sex}', 
                    weight = ${req.body.weight}, 
                    color = '${req.body.color}', 
                    marks = '${req.body.marks}', 
                    aggresive = '${req.body.aggressive}', 
                    trained = '${req.body.trained}', 
                    status = '${req.body.status}', 
                    description = '${req.body.description}', 
                    updated = now() 
                WHERE dog_id = ${req.params.id}`;
    con.query(sql,(err, result)=>{
       if(err) throw err;
    });
};

const deleteDog = (req, res) => {
    let sql = `UPDATE dog 
                SET table_status = 'Deleted', deleted = now() 
                WHERE dog_id = ${req.params.id}`;
    con.query(sql,(err, result)=>{
        if(err) throw err;
    });
};

module.exports = {
    getDog,
    addDog,
    updateDog,
    deleteDog
};