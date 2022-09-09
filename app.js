const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.get('/', function(req, res){

    res.render("home");

});

app.listen(port, function () {
    console.log("Server is up on port " + port + ".");
});