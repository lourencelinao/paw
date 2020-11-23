const connection = require("../database/database");
//GOOD
const createIntake = (intakeable_id, health_condition, dog_id) => {
  let sql = `INSERT INTO intake(intakeable_id,dog_id,health_condition) VALUES(${intakeable_id},${dog_id},'${health_condition}')`;
  connection.query(sql, (err) => {
    if (err) throw err;
  });
};

//GOOD
const getIntake = (req, res) => {
  let sql = "SELECT * FROM intake";
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
  createIntake,
  getIntake,
  patchIntake,
  deleteIntake,
};
