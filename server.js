var express = require('express'); 
var app = express();
var login = require('./routes/login');
var api = require('./routes/api');
var cloudinary = require('cloudinary');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/users', login);
app.use('/api', api);

cloudinary.config({ 
    cloud_name: 'oabroad', 
    api_key: '812922695185549', 
    api_secret: 'rQ4gpC1eTftju-LivnbIPkYEI4s' 
});

app.listen(process.env.PORT || 5000);  