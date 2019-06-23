var express = require('express'); 
var app = express();
var login = require('./routes/login');
var api = require('./routes/api');
var cloudinary = require('cloudinary');
var path = require('path'); 
const bodyParser = require('body-parser');

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/users', login);
app.use('/api', api);

cloudinary.config({ 
    cloud_name: 'oabroad', 
    api_key: '812922695185549', 
    api_secret: 'rQ4gpC1eTftju-LivnbIPkYEI4s' 
});

//app.listen(process.env.PORT || 5000);  

app.listen(process.env.PORT || 8080);  