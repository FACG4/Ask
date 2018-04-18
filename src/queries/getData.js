<<<<<<< HEAD
const dbConnections = require("./../database/db_connection");

const getUserData = (user_id, cb) => {
  dbConnections.query(
    `select questions.id as questionid, questions.body as questionBody ,answers.body  as answerBody, questions.user_id as user_id from questions left join answers on questions.id=answers.question_id where questions.user_id=${user_id} ;`,
    (err, res) => {
      if (err) cb(err);
      else {
        cb(null, res.rows);
      }
    }
  );
};
=======
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
>>>>>>> 69b514c267f917e91cd0430ab63a812f859b0564

const getData = cb => {
  dbConnections.query(
    "SELECT u.id , u.name , q.body AS question, a.body AS answer FROM users u, questions q , answers a WHERE u.id = q.user_id AND q.id = a.question_id ;",
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};
<<<<<<< HEAD
module.exports = { getUserData, getData };
=======

module.exports = {
  getUserData,
  getData
};
>>>>>>> 69b514c267f917e91cd0430ab63a812f859b0564
