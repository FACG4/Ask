const tape = require("tape");
const getData = require("../src/queries/getData");
const dbBuild = require("../src/database/db_build");

 

tape("getData", t => {
   let expected =
    [ { id: 4, name: 'Ahmed', question: 'What is your favorite color?', answer: 'Red' },
     { id: 1, name: 'Sallam', question: 'How old are you?', answer: '12' },
      { id: 3, name: 'Abdullah', question: 'Do you like programming?', answer: 'No' },
      { id: 3, name: 'Abdullah', question: 'Do you like programming?', answer: 'No' },
      { id: 3, name: 'Abdullah', question: 'Do you like programming?', answer: 'No' },
       { id: 3, name: 'Abdullah', question: 'Do you like programming?', answer: 'No' },
        { id: 3, name: 'Abdullah', question: 'Do you like programming?', answer: null },
         { id: 2, name: 'Balsam', question: 'Do you like dogs?', answer: 'Yes I do :)' } ];

   getData((err, result) => {
    if (err) console.log(err);
    t.deepEqual(result, expected, "Returns expected data");
  });
  t.end();
});




// tape("PostData", t => {
//   dbBuild(function(err, res) {
//     t.error(err, "No Error");
//
//     postData("Minesh", "London", (err, result) => {
//       if (err) console.log(err);
//       getData((err, result) => {
//         if (err) console.log(err);
//         t.deepEqual(result.length, 2, "Returns expected data");
//         t.end();
//       });
//     });
//   });
// });
