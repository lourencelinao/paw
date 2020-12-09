
const conn = require('../../database/database');




//get all active users
const getUser = (req,res) =>{
  let sql = "SELECT * from users WHERE table_staus='Active'";
  conn.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
};


//insert
const addUser = (req,res)=>{
  let sql = `INSERT INTO users (person_id,user_type,password,image,table_status)
             VALUES (${req.body.person_id},${req.body.user_type},${req.body.password},${req.body.image},${req.body.table_status})`;  
};

//update
const updateUser = (req,res) =>{
  let sql = `UPDATE users
              SET person_id = '${req.body.person_id}',
                  user_type = '${req.body.user_type}',
                  password = '${req.body.password}',
                  image = '${req.body.image}',
                  table_status = '${req.body.table_status}',
                  update = now()
                WHERE user_id = ${req.params.id}`;
    conn.query(sql,(err,result)=>{
      if(err) throw err;
    });
};


//delete a record
const deleteUser = (req,res) => {
  let sql = `UPDATE  users
             SET table_status='Deleted',deleted = now(); 
             WHERE user_id = $(req.params.id)`;
  conn.query(sql,(err,result)=>{
      if(err) throw err;
  });
};

module.exports = {
  getUser,
  addUser,
  updateUser,
  deleteUser
}
