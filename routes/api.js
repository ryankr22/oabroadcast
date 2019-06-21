var router = require('express').Router();
var cloudinary = require('cloudinary');
const Sequelize = require('sequelize');
var twilio = require('twilio');
const accountSid = 'ACc7c06f63068d057a36047c8c75397f48';
const authToken = '3e59e91fd19648a5f7df6b00a038f569';
var client = new twilio(accountSid, authToken);
//const client = require('twilio')(accountSid, authToken);

const sequelize = new Sequelize('oabroadc_', 'oabroadcast', 'SteveBriRy0', {
  dialect: 'mssql',
  host: 'mi3-wsq4.a2hosting.com' 
}); 

sequelize 
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

router.post('/deleteSlideshow', function (req, res) {   
  let id = req.body.id;
  let tagName = req.body.tagName;
  
  sequelize.query("Delete from slideshow where id = " + id, { type: sequelize.QueryTypes.SELECT })
  .then(function(result) {
    cloudinary.v2.api.delete_resources_by_tag(tagName, function(error, result) {
      console.log(result);
    });

    res.send(BuildResponseObject(null, true, null)); })
  .error(function(err) {
    res.send(BuildResponseObject(null, false, err));
  });   
});

router.post('/deleteImage', function (req, res) { 
  let publicId = req.body.publicId;  
  cloudinary.v2.api.delete_resources([publicId], function(error, result) {
    res.send(BuildResponseObject(null, true, null));    
  });  
});

router.post('/liveSlideshow', function(req, res) {
let username = req.body.username;
  
  sequelize.query("exec GetLiveSlideshow '" + username + "'", {
    type: sequelize.QueryTypes.SELECT
  }).then(function(result) {    
    res.send(BuildResponseObject(result, true, null));
  }).error(function(err) {
    res.send(BuildResponseObject(null, false, err));
  }); 
});

router.post('/getUserSlideshows', function (req, res) {   
  let username = req.body.username;
  
  sequelize.query("Select s.* from slideshow s join users u on s.userId = u.username where u.username = '" + username + "'", {
    type: sequelize.QueryTypes.SELECT
  }).then(function(result) {
    console.log(result);
    res.send(BuildResponseObject(result, true, null));
  }).error(function(err) {
    res.send(BuildResponseObject(null, false, err));
  });   
});

router.post('/slideshow', function (req, res) {  
    let tagName = req.body.tagName;           

    console.log("tag to use: " + tagName)
    cloudinary.v2.api.resources_by_tag(tagName, 
    function(error, result){        
      console.log(result);            
        res.end(JSON.stringify(result)); 
    });  
});

router.post('/saveSlideshowSQL', function (req, res) {  
  let files = req.body.files;
  let username = req.body.username;
  let tagName = req.body.tagName;
  let startDate = new Date(req.body.startDate).toISOString();
  let endDate = new Date(req.body.endDate).toISOString();
  console.log(startDate);
  console.log(endDate);

  sequelize.query("INSERT INTO Slideshow values ('" + username + "', '" + tagName + "', '" + startDate + "', '" + endDate + "')", {
    type: sequelize.QueryTypes.SELECT
  }).then(function(result) {   
    SaveSlideshowDetails(files, tagName);
    res.send("success");
            
  }).error(function(err) {
      res.send(BuildResponseObject(null, false, err));
  });  
});

router.post('/saveGuestSlideshow', function (req, res) {    
  let username = req.body.username;
  let tagName = req.body.tagName;
  let startDate = new Date(req.body.startDate).toISOString();
  let endDate = new Date(req.body.endDate).toISOString();
  
  console.log(startDate);
  console.log(endDate);

  sequelize.query("INSERT INTO Slideshow values ('" + username + "', '" + tagName + "', '" + startDate + "', '" + endDate + "')", {
    type: sequelize.QueryTypes.SELECT
  }).then(function(result) {   
    sendSMS('http://localhost:3000/MySlideshows?username=' + username + '&tagName=' + tagName, username );

    res.send(BuildResponseObject("success", true, null));                   
  }).error(function(err) {
      res.send(BuildResponseObject(null, false, err));
  });  


});

router.post('/sms', function (req, res) {    
  let username = req.body.username;
  let tagName = req.body.tagName;

  sendSMS('http://localhost:3000/MySlideshows?username=' + username + '&tagName=' + tagName, username );
});

function sendSMS(message, to) {  
  try {
  client.messages.create({
     body: message,
     from: '+16146666120',
     to: to
   })
  .then(message => console.log(message.sid));
  } catch (err) {
    console.log('here');
    console.log(err);
  } 
}

function SaveSlideshowDetails(files, tagName) {
  let fileOrderIndex = 0;
  files.forEach(function(file) {
    sequelize.query("INSERT INTO SlideshowDetails values ('" + fileOrderIndex + "', '" + tagName + "', '" + file.path + "')", {
      type: sequelize.QueryTypes.SELECT
    }).error(function(err) {
        res.send(BuildResponseObject(null, false, err));
    });  
    fileOrderIndex = fileOrderIndex + 1;
  });
}

function BuildResponseObject(data, success, error) {
  let responseObject = {
    "result": data,
    "success": success,
    "error": error
   }

   return responseObject;
}

module.exports = router;