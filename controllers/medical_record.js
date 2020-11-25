const connection = require("../database/database");
//GOOD
const createmedicalRec = (req, res) => {
  let sql = `INSERT INTO medical_record(dog_id, clinic_id, vet_id, description, diagnosis, test_performed,action,medications,comment)
    VALUES(${req.body.dog_id},${req.body.clinic_id},${req.body.vet_id},'${req.body.description}','${req.body.diagnosis}','${req.body.test_performed}','${req.body.action}','${req.body.medications}','${req.body.comment}')
        `

  connection.query(sql, (err) => {
    if (err) throw err;
    res.status(200).send();
  });
};

//GOOD
const medicalRecMenu = (req,res) => {
  let sql =
    "SELECT clinic_id,name FROM clinic; SELECT vet_id,name FROM veterinarian; SELECT dog_id,dog_name FROM dog";
  connection.query(sql, (err,data) => {
    if(err)throw err;
    res.send(data);
  });
};
//GOOD
const getmedicalRec = (req, res) => {
  let sql = "SELECT * FROM medical_record";
  connection.query(sql, (err,data) => {
    if (err) throw err;
    res.send(data);
  });
};

//GOOD
const patchmedicalRec = (req, res) => {
  let sql = `UPDATE medical_record
    SET dog_id=${req.body.dog_id}, clinic_id=${req.body.clinic_id},vet_id=${req.body.vet_id},
    description='${req.body.description}',diagnosis='${req.body.diagnosis}',test_performed='${req.body.test_performed}',
    action='${req.body.action}', medications='${req.body.medications}',comment='${req.body.comment}'
    WHERE medical_id=${req.params.id}
    `;
  connection.query(sql, (err) => {
    if (err) throw err;
    res.status(200).send();
  });
};
//GOOD
const deletemedicalRec = (req, res) => {
  let sql = `UPDATE medical_record
    SET table_status='Deleted',
    deleted=NOW()
    WHERE medical_id=${req.params.id}
    `;
  connection.query(sql, (err) => {
    if (err) throw err;
    res.status(200).send();
  });
};

module.exports = {
  createmedicalRec,
  getmedicalRec,
  medicalRecMenu,
  patchmedicalRec,
  deletemedicalRec,
};
