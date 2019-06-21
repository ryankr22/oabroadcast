const router = require('express').Router();
const crypto = require('crypto');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const config = require('./config'); 
const express = require('express');
const app = express();
const salt = "6139471b2xb19t64";
const success = "success";
const inUse = "in use";
const incorrectUser = "incorrect username and/or password";

app.set('tk', config.tk);

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

router.post('/signup', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let company = 'oabroadcast';
    let saltedPassword = saltHashPassword(password); 
    
    sequelize.query("exec SignupUser @username='" + username + "', @password='" + saltedPassword.passwordHash + "', " + "@company='"+ company + "', @salt='" + saltedPassword.salt + "'", {
        type: sequelize.QueryTypes.SELECT
    }).then(function(result) {
        console.log(result);
        if (result.length === 0) { res.status(400).send('no results found'); }   

        if (result[0].status === success)
            res.send(result[0].status);
        else if(result[0].status === inUse)
            res.status(400).send(result[0].status);
        else
            res.status(400).send('error occurred during signup');
        
    }).catch(function(err) {
        console.log(err);
        res.status(500).send('error occurred during signup');
    });
  });
  
  router.post('/login', function (req, res) {
    
    let username = req.body.username;
    let password = req.body.password;

    let saltedPassword = saltHashPassword(password); 

    sequelize.query("SigninUser @username='" + username + "', @password='" + saltedPassword.passwordHash + "'", {
        type: sequelize.QueryTypes.SELECT
    }).then(function(result) {
        if (result.length === 0) { res.status(400).send('no results found'); }           
            if (result[0].status === success){
                var token = jwt.sign({username: username, isAdmin: result[0].isAdmin, company: result[0].company}, app.get('tk'), {
					expiresIn: 86400 //86400 // expires in 24 hours
                });
                
                console.log(result);
                res.json({success: true, token: token, isAdmin: result[0].isAdmin, company: result[0].company});
            }               
            else if (result[0].status === incorrectUser)            
                res.status(401).send(result[0].status);
            else
                res.status(400).send('error occurred during login');
       
    }).catch(function(error) {
        console.log(error);        
        res.status(500).send('error occurred during login');
    });
}); 

function saltHashPassword(userpassword) {
    //var salt = genRandomString(16); /** Gives us salt of length 16 */    
    var passwordData = sha512(userpassword, salt);
  
    return passwordData;
  }
  
var sha512 = function(password){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
  };  

module.exports = router;