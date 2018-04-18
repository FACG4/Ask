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
}

const getUserInfo = (err, data) => {
  if (err) {
    throw new Error(err);
  } else {
    const selectSql = JSON.parse(data);
    console.log(selectSql);
    selectSql.forEach((info) => {

      const row = document.createElement('section');
      row.setAttribute('id', 'row');
      const questionLabel = document.createElement('label');
      questionLabel.setAttribute('id', 'quesLab');
      const answerLabel = document.createElement('label');
      answerLabel.setAttribute('id', 'ansLab');
      // const btnUserName = document.createElement('button');
      const userNamelink = document.createElement('a');
      userNamelink.setAttribute('id', 'name');
      userNamelink.setAttribute('href', "/user/" +info.id);
      userNamelink.textContent = info.name;



      const br = document.createElement('br');
      questionLabel.textContent = info.question;
      answerLabel.textContent = info.answer;

      // btnUserName.addEventListener('click', (e) => {
      //   const userData = [{
      //     id: info.id,
      //     name: info.name
      //   }];
      //   localStorage.setItem( 'objectToPass', JSON.stringify(userData) );
      //   location.href = "../html/dom_user_page.html" ;
      // });

      document.getElementById('bodyid').appendChild(row);
      row.appendChild(questionLabel);
      row.appendChild(answerLabel);
      row.appendChild(userNamelink);
      row.appendChild(br);

    });

  }
}

fetch('/select', getUserInfo);
