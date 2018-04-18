const dbConnections= require('./../database/db_connection');

const getUserData=(user_id,cb)=>{
    dbConnections.query(`SELECT questions.body as questionBody ,answers.body  AS answerBody FROM questions INNER JOIN answers ON questions.id=answers.question_id where questions.user_id=${user_id}`,(err,res)=>{
        if(err) cb(err);
        else{
            cb(null,res.rows);
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

module.exports={getUserData,getData};
