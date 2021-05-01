const app = require('express')();
const path = require('path');
const serverStatic = require('serve-static');
app.use('/',serverStatic(path.join(__dirname,'/dist')));

const port = process.env.PORT || 8080;

app.listen(port);

console.log("listen"+ port);
