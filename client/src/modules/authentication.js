var jwt = require('jsonwebtoken');

exports.verifyToken = function() {
    let token = window.localStorage.getItem('tk');

    if (token === null) return;
    
    let decoded = jwt.decode(token);    

    var dateNow = new Date();

    let user = {
        username: decoded.username,
        isAdmin: decoded.isAdmin,
        company: decoded.company
    }
    if (decoded.exp > dateNow.getTime() / 1000) 
        return user;               
    else 
        return null;    
}

exports.getUserFromToken = function() {
    let token = window.localStorage.getItem('tk');

    if (token === null) return '';
    
    let decoded = jwt.decode(token);    

    return decoded.username;
}

exports.signOut = function() {
    localStorage.removeItem('tk');
}