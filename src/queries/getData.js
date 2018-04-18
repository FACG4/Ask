const dbConnections= require('./../database/db_connection');

const getUserData=(user_id,cb)=>{
    dbConnections.query(`select * from questions inner join answers on questions.id=answers.question_id where questions.user_id=${user_id}`,(err,res)=>{
        if(err) cb(err);
        else{
            cb(null,res.rows);
        }
    });

}
module.exports={getUserData};