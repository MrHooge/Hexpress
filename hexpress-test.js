const hexpress = require('./Hexpress');
const fs = require('fs')
const path = require('path')
const app = hexpress();

app.get("/", (req, res) => {
  fs.readFile(path.resolve("./Hexpress.js"), (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("500 - InternetServer Error!");
      return;
    }
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html");
    res.end(data);
  })
})

app.get("/users", (req, res) => {

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  // res.send()
  // res.render(htmlpath/ejs,data)
  res.end(JSON.stringify([{
    name: 'tom',
    age: 20
  }]));
})

app.listen(3000);