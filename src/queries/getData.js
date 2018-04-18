const databaseConnection = require('../database/db_connection.js');

const getData = cb => {
  databaseConnection.query('SELECT u.id , u.name , q.body AS question, a.body AS answer FROM users u, questions q , answers a WHERE u.id = q.user_id AND q.id = a.question_id ;', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getData;
