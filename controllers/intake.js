const connection = require("../database/database");
//GOOD
const postIntake = (req, res) => {
  let sql = `INSERT INTO intake(dog_id, intakeable_type, firstname, middle_initial, lastname, attendant) VALUES(${req.body.dog_id},'${req.body.intakeable_type}', '${req.body.firstname}', '${req.body.middle_initial}', '${req.body.lastname}', '${req.body.attendant}')`;
  connection.query(sql, (err) => {
    if (err) throw err;
    res.send()
  });
};

//GOOD
const getIntake = (req, res) => {
  let sql = `SELECT * FROM intake WHERE dog_id = ${req.params.id}`;
  connection.query(sql, (err, data) => {
    if(err)throw err;
    res.send(data);
  });
};
//GOOD
const patchIntake = (req, res) => {
  let sql = `UPDATE intake
    SET intakeable_type='${req.body.intakeable}',
    health_condition='${req.body.health_condition}'
    WHERE intake_id=${req.params.id}
    `;
  connection.query(sql, (err) => {
    if (err) throw err;
    res.status(200).send();
  });
};
//GOOD
const deleteIntake = (req, res) => {
  let sql = `UPDATE intake
    SET table_status='Deleted',
    deleted=NOW()
    WHERE intake_id=${req.params.id}
    `;
  connection.query(sql, (err) => {
    if (err) throw err;
    res.status(200).send()
  });
};

module.exports = {
  postIntake,
  getIntake,
  patchIntake,
  deleteIntake,
};
