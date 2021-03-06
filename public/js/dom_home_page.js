const fetch = (url, callback) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
     if (xhr.status === 200) {
      callback(null, xhr.responseText);
    }else{
      callback("Error" + xhr.responseText)
    }
  }

};
  xhr.open("GET", url);
  xhr.send();
};

const getUserInfo = (err, data) => {
  if (err) {
    throw new Error(err);
  } else {
    const selectSql = JSON.parse(data);
    selectSql.forEach(info => {
      const row = document.createElement("section");
      row.setAttribute("class", "row");
      const questionLabel = document.createElement("label");
      questionLabel.setAttribute("class", "quesLab");
      const answerLabel = document.createElement("label");
      answerLabel.setAttribute("class", "ansLab");
      const userNamelink = document.createElement("a");
      userNamelink.setAttribute("class", "nameLink");
      userNamelink.setAttribute("href", "/user/" + info.id);

      questionLabel.textContent = info.question;
      answerLabel.textContent = info.answer;
      userNamelink.textContent = info.name;

      document.getElementById("bodyid").appendChild(row);
      row.appendChild(userNamelink);
      row.appendChild(questionLabel);
      row.appendChild(answerLabel);
    });
  }
};

  fetch("/select", getUserInfo);
