const connection = require("../database/database");
let intake = require("./intake");

//GOOD
const createTransferee = (req, res) => {
  let sql = `INSERT INTO transferee_intake(shelter_name,address1,address2,city,province,contact_number,email_address)
    VALUES('${req.body.shelter_name}','${req.body.address1}', '${req.body.address2}','${req.body.city}','${req.body.province}',
    '${req.body.contact_number}','${req.body.email_address}')`;

  connection.query(sql, (err, data) => {
    if (err) throw err;
    else {
      //call dog function

      intake.createIntake(data.insertId, req.body.healthCondition,  /* PUT DOG ID HERE*/);
    }
    return res.status(200).send();
  });
};

//GOOD
const getTransferee = (req, res) => {
  let sql = "SELECT * FROM transferee_intake";
  connection.query(sql, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
};

//GOOD
const patchTransferee = (req, res) => {
  let sql = `UPDATE transferee_intake
    SET shelter_name='${req.body.shelter_name}',address1='${req.body.address1}',
    address2='${req.body.address2}',city='${req.body.city}',province='${req.body.province}',
    contact_number='${req.body.contact_number}', email_address='${req.body.email_address}'
    WHERE transferee_id=${req.params.id}
    `;
  connection.query(sql, (err) => {
    if (err) throw err;
    res.status(200).send();
  });
};
//GOOD
const deleteTransferee = (req, res) => {
  let sql = `UPDATE transferee_intake
    SET table_status="DELETED",
    deleted=NOW()
    WHERE transferee_id=${req.params.id}
    `;
  connection.query(sql, (err) => {
    if (err) throw err;
    res.status(200).send();
  });
};

module.exports = {
  createTransferee,
  getTransferee,
  patchTransferee,
  deleteTransferee,
};
