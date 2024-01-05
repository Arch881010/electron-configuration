var express = require('express');

const app = express(); //Create app

app.use(express.static("./"))

const PORT = 3000
app.listen(PORT, function (err) { //Launch server.
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);

});