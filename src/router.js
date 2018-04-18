const fs = require('fs');
const path = require('path');
const getData = require('./queries/getData');
const router = (req, response) => {

  const endpoint = req.url;
  if (endpoint === "/") {
    fs.readFile(path.join(__dirname, '..', 'public', 'html', 'home_page.html'), (err, file) => {
      if (err) {
        throw new Error(err);
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/html'
        });
        response.end(file);
      }
    });
  }
  else if (endpoint.split('/')[1]==="user") {
    fs.readFile(path.join(__dirname, '..', 'public', 'html', 'user_page.html'), (err, file) => {
      if (err) {
        throw new Error(err);
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/html'
        });
        response.end(file);
      }
    });
  }
  else if (endpoint === "/css/style.css") {
    fs.readFile(path.join(__dirname, '..', 'public', 'css', 'style.css'), (err, file) => {
      if (err) {
        throw new Error(err);
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });
        response.end(file);
      }
    });

  } else if (endpoint === "/js/dom_home_page.js") {
    fs.readFile(path.join(__dirname, '..', 'public', 'js', 'dom_home_page.js'), (err, file) => {
      if (err) {
        throw new Error(err);
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/javascript'
        });
        response.end(file);
      }
    });
  }
  else if (endpoint === "/js/dom_user_page.js") {
    fs.readFile(path.join(__dirname, '..', 'public', 'js', 'dom_user_page.js'), (err, file) => {
      if (err) {
        throw new Error(err);
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/javascript'
        });
        response.end(file);
      }
    });
  }
   else if (endpoint === "/select") {
    getData.getData((err, res) => {
      if (err) {
        response.writeHead(500, 'Content-Type:text/html');
        response.end('<h1>Sorry, there was a problem getting the users</h1>');
        console.log(error);
      } else {
        let output = JSON.stringify(res);
        response.writeHead(200, {
          'content-type': 'application/json'
        });
        response.end(output);
      }
    });

  }else if(endpoint.split('/')[1]==="selectUser"){
    let id =endpoint.split('/')[2];
    getData.getUserData((err,res)=>{
        if (err) {
            response.writeHead(500, 'Content-Type:text/html');
            response.end('<h1>Sorry, there was a problem getting the users</h1>');
            console.log(err);
          } else {
            let output = JSON.stringify(res);
            response.writeHead(200, {
              'content-type': 'application/json'
            });
            response.end(output);
          }
    },id);
}else{
  fs.readFile(path.join(__dirname, '..', 'public', 'html', 'error.html'), (err, file) => {
    if (err) {
      throw new Error(err);
    } else {
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.end(file);
    }
  });
}

}

module.exports = router;
