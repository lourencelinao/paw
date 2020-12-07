const connection = require("../database/database");
let intake = require("./intake");

//GOOD
const createRescued = (req, res) => {
  let sql = `INSERT INTO rescued_intake(address1,address2,city,province)
  VALUES('${req.body.address1}', '${req.body.address2}','${req.body.city}','${req.body.province}')`;
  connection.query(sql, (err, data) => {
    if (err) throw err;
    else {
      //call dog function

      intake.createIntake(data.insertId, req.body.healthCondition, /* PUT DOG ID HERE*/);
    }
    res.send(data)
  });
};
//GOOD
const getRescued = (req, res) => {
  let sql = "SELECT * FROM rescued_intake";
  connection.query(sql, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
};
//GOOD
const patchRescued = (req, res) => {
  let sql = `UPDATE rescued_intake
    SET address1='${req.body.address1}', address2='${req.body.address2}',
    city='${req.body.city}',province='${req.body.province}'
    WHERE rescued_id=${req.params.id}
    `;
  connection.query(sql, (err) => {
    if (err) throw err;
    res.status(200).send();
  });
};
//GOOD
const deleteRescued = (req, res) => {
  let sql = `UPDATE rescued_intake
        SET table_status='DELETED',deleted=NOW()
        WHERE rescued_id=${req.params.id}`;

  connection.query(sql, (err) => {
    if (err) throw err;
    res.status(200).send();
  });
};

module.exports = {
  createRescued,
  getRescued,
  patchRescued,
  deleteRescued,
};
