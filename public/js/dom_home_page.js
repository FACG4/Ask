const fetch = (url, callback) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(null, xhr.responseText);
    } else {
      callback("error" + xhr.responseType);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

const getUserInfo = (err, data) => {
  if (err) {
    throw new Error(err);
  } else {
    const selectSql = JSON.parse(data);
    console.log(selectSql);
<<<<<<< HEAD
    selectSql.forEach(info => {
      const row = document.createElement("section");
      row.setAttribute("id", "row");
      const questionLabel = document.createElement("label");
      questionLabel.setAttribute("id", "quesLab");
      const answerLabel = document.createElement("label");
      answerLabel.setAttribute("id", "ansLab");
      // const btnUserName = document.createElement('button');
      const userNamelink = document.createElement("a");
      userNamelink.setAttribute("id", "name");
      userNamelink.setAttribute("href", "/user/" + info.id);
      userNamelink.textContent = info.name;

      const br = document.createElement("br");
=======
    selectSql.forEach((info) => {

      const row = document.createElement('section');
      row.setAttribute('class', 'row');
      const questionLabel = document.createElement('label');
      questionLabel.setAttribute('class', 'quesLab');
      const answerLabel = document.createElement('label');
      answerLabel.setAttribute('class', 'ansLab');
      const userNamelink = document.createElement('a');
      userNamelink.setAttribute('class', 'nameLink');
      userNamelink.setAttribute('href', "/user/" + info.id);


>>>>>>> 69b514c267f917e91cd0430ab63a812f859b0564
      questionLabel.textContent = info.question;
      answerLabel.textContent = info.answer;
      userNamelink.textContent = info.name;


<<<<<<< HEAD
      document.getElementById("bodyid").appendChild(row);
      row.appendChild(questionLabel);
      row.appendChild(answerLabel);
      row.appendChild(userNamelink);
      row.appendChild(br);
=======
      document.getElementById('bodyid').appendChild(row);
      row.appendChild(userNamelink);
      row.appendChild(questionLabel);
      row.appendChild(answerLabel);

>>>>>>> 69b514c267f917e91cd0430ab63a812f859b0564
    });
  }
<<<<<<< HEAD
};

fetch("/select", getUserInfo);
=======
}
window.onload = function () {
  fetch('/select', getUserInfo);
 }
>>>>>>> 69b514c267f917e91cd0430ab63a812f859b0564
