var express = require('express'); 
var app = express();
const bodyParser = require('body-parser');

var cloudinary = require('cloudinary');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

cloudinary.config({ 
    cloud_name: 'oabroad', 
    api_key: '<key>', 
    api_secret: '<secret>' 
  });

app.post('/api/slideshow', function (req, res) { 
    cloudinary.v2.api.resources_by_tag("oabroadcast", 
    function(error, result){     
        console.log(error, result);         
    }); 
});

var server = app.listen(process.env.PORT || 5000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});