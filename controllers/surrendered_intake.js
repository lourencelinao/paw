const connection = require("../database/database");
let intake = require("./intake");

//GOOD
const createSurrendered = (req, res) => {
  let sql = `INSERT INTO surrendered_intake(person_id,reason_of_surrender) VALUES(${req.body.person_id}, '${req.body.reason}')`;
  connection.query(sql, (err, data) => {
    if (err) throw err;
    else {
      //call dog function

      intake.createIntake(data.insertId, req.body.healthCondition, /* PUT DOG ID HERE*/);
    }
    return res.status(200).send();
  });
};

//GOOD
const getSurrendered = (req, res) =>{
  let sql = "SELECT * FROM surrendered_intake"
  connection.query(sql, (err, data) => {
    if (err) throw err;
    res.send(data);
  })
}

//GOOD
const patchSurrendered = (req, res) => {
  let sql = `UPDATE surrendered_intake
    SET reason_of_surrender="${req.body.reason}"
    WHERE surrendered_id=${req.params.id}
    `;
  connection.query(sql, (err) => {
    if (err) throw err;
    res.status(200).send()
  });
};

//GOOD
const deleteSurrendered = (req, res) => {
  let sql = `UPDATE surrendered_intake
    SET table_status='DELETED',deleted=NOW()
    WHERE surrendered_id=${req.params.id} `;

  connection.query(sql, (err) => {
    if (err) throw err;
    res.status(200).send();
  });
};

module.exports = {
  createSurrendered,
  getSurrendered,
  patchSurrendered,
  deleteSurrendered,
};
