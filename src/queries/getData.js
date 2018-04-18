const dbConnections = require('./../database/db_connection');

const getUserData = (cb ,user_id) => {
  const sql = {
    text : 'SELECT questions.body as questionBody ,answers.body  AS answerBody FROM questions LEFT JOIN answers ON questions.id=answers.question_id WHERE questions.user_id=$1',
    values : [user_id]
  };
  dbConnections.query(sql, (err, res) => {
    if (err) {
       cb(err);
    } else {
      cb(null, res.rows);
    }
  });
}

const getData = cb => {
  dbConnections.query('SELECT u.id , u.name , q.body AS question, a.body AS answer FROM users u, questions q , answers a WHERE u.id = q.user_id AND q.id = a.question_id ;', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = {
  getUserData,
  getData
};
