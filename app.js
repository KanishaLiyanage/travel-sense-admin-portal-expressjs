const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;

app.get('/', function (req, res) {

    res.render("home");

});

var herokuEndPoint = "https://travel-sense-app-rest-api.herokuapp.com/admin/addPlace";
var localHostEndPoint = "http://localhost:3000/admin/addPlace";

app.post('/addPlace', async (req, res) => {

    let name = req.body.name;
    let imageUrl = req.body.image;
    let desc = req.body.description;
    let dist = req.body.district;

    var locationData = {
        "name": name,
        "image": imageUrl,
        "district": dist,
        "description": desc
    };

    try {
        const response = await axios.post(localHostEndPoint, locationData);
        if(response.status == 201){
            res.redirect('/');
        }
        
    } catch (e) {
        console.log(e);
        res.status(500).json({ msg: "something bad has occurred." });
    }

});



app.listen(port, function () {
    console.log("Server is up on port " + port + ".");
});