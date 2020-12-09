const connection = require('../../database/database');

const getActions = (req, res) => {
    connection.query("SELECT * FROM action WHERE action_type != 'Deleted'", (err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

const addAction = (req, res) => {
    connection.query("INSERT INTO action (users_id, table_id, table_name, action_type) VALUES ('"+req.body.user_id+"','"+req.body.table_id+"','"+req.body.table_name+"','"+req.body.action_type+"')", (err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

const deleteAction = (req, res) => {
    connection.query("UPDATE action SET action_type = 'Deleted', deleted = now() WHERE clinic_id = '"+req.body.action_id+"'",(err, result)=>{
        if(result){
            res.send(result);
        }
    })
}

module.exports = {
    getActions,
    addAction,
    deleteAction
}