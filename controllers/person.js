
const conn = require('../database/database');




//get all active users
const getPeople = (req,res) =>{
  let sql = "SELECT * from person WHERE table_staus='Active'";
  conn.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
};

const getPerson = (req,res) =>{
  let sql = `SELECT * FROM person WHERE person_id = ${req.params.id}`;
  conn.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
};


const updatePersonEmail = (req, res) => {
  let sql = `UPDATE person SET email_address = '${req.body.email_address}' WHERE person_id = ${req.params.id}`
  conn.query(sql, (err, data) => {
    if(err) throw err
    res.send()
  })
}


//insert

const addPerson = (req,res)=>{
  let sql = `INSERT INTO person (first_name,last_name,middle_initial,birthdate,contact_number,address1,address2,city,table_status) 
             VALUES (${req.body.first_name},${req.body.last_name},${req.body.middle_initial},${req.body.birthdate},${req.body.contact_number},${req.body.address1},${req.body.address2},${req.body.city},${req.body.table_status})`;
             
};
 //update
 const updatePerson = (req,res) =>{
    let sql = `UPDATE person
                SET first_name = '${req.body.first_name}',
                    last_name = '${req.body.last_name}',
                    middle_initial = '${req.body.middle_initial}',
                    birthdate = '${req.body.birthdate}',
                    contact_number = '${req.body.contact_number}',
                    address1 = '${req.body.address1}',
                    address2 = '${req.body.address2}',
                    city = '${req.body.city}',
                    updated = now()
                  WHERE person_id = ${req.params.id}`;
      conn.query(sql,(err,result)=>{
        if(err) throw err;
        res.send()
      });
 };
 
 //delete a record
 const deletePerson = (req,res) => {
  let sql = `UPDATE  person
             SET table_status='Deleted',deleted = now(); 
             WHERE person_id = $(req.params.id)`;
  conn.query(sql,(err,result)=>{
      if(err) throw err;
  });
};

module.exports = {
  getPerson,
  addPerson,
  updatePerson,
  deletePerson,
  updatePersonEmail
}







    

   


