const conn = require('../../database/database');

//get all active vets
const getVet = (req,res) =>{
  let sql = "SELECT * from veterinarian WHERE table_staus='Active'";
  conn.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
};
//insert
const addVet = (req,res)=>{
  let sql = `INSERT INTO veterinarian (person_id,clinic_id,table_status)
             VALUES (${req.body.person_id},${req.body.clinic_id},${req.body.table_status})`;  
};

//update
const updateVet = (req,res) =>{
  let sql = `UPDATE veterinarian
              SET person_id = '${req.body.person_id}',
                  clinic_id = '${req.body.clinic_id}',
                  table_status = '${req.body.table_status}',
                  update = now()
                WHERE vet_id = ${req.params.id}`;
    conn.query(sql,(err,result)=>{
      if(err) throw err;
    });
};

//delete a record
 const deleteVet = (req,res) => {
  let sql = `UPDATE  veterinarian
             SET table_status='Deleted',deleted = now(); 
             WHERE vet_id = $(req.params.id)`;
  conn.query(sql,(err,result)=>{
      if(err) throw err;
  });
};

module.exports = {
  getVet,
  addVet,
  updateVet,
  deleteVet
}




