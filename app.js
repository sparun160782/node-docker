const os = require('os');
const http = require('http');
const express = require('express');
//const storage = require('node-sessionstorage');
const path = require('path');
const cookieParser = require('cookie-parser');
const hostURL = process.env.HOST_URL;

const app = express();
/*app.use(express.static('public'));
app.set('views', path.join('src/assets', '/views'));
app.set('view engine', 'ejs');*/
app.use(cookieParser());
app.get('*', (req, res) => {

  console.log(req.headers);
  res.cookie("userData", req.headers);
  res.redirect(hostURL);
  /*res.render('index', {
    os: {
      hostname: os.hostname(),
      type: os.type(),
      platform: os.platform(),
      release: os.release()
    },
    headers: Object.keys(req.headers).sort().map((name) => ({ name, value: req.headers[name] })),
    test: Object.keys(req.headers).forEach((name) => {
      debugger;
      console.log(req.headers);
      res.cookie("userData", req.headers);
      // console.log(name, storage.getItem('name'));
    })
  })*/

});

const port = process.env.PORT || 8080;

const server = http.createServer(app);
server.listen(port, (err) => {
  if (err) {
    console.error(`Error starting server on ${port}: ${err.message}`);
    return;
  }

  console.log(`Express listening on http://localhost:${port}`);
});