
const conn = require('../../database/database');




//get all active users
const getPerson = (req,res) =>{
  let sql = "SELECT * from person WHERE table_staus='Active'";
  conn.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
};



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
                    table_status = '${req.body.table_status}',
                    update = now()
                  WHERE person_id = ${req.params.id}`;
      conn.query(sql,(err,result)=>{
        if(err) throw err;
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
  deletePerson
}







    

   


