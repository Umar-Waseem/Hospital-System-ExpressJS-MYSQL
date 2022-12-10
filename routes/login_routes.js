const express = require('express');
const router = express.Router();
var con = require("../handlers/database_handler.js");

const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();

router.get('/', (request, res) => {
    res.sendFile(`I:/SEMESTER 5/Database Systems/Database Project/public/html/login.html`)
})

// post request on root route
router.post('/', encoder,  (request, res) => {

    console.log("Post request on login")

    var username = request.body.loginUsername;
    var password = request.body.loginPassword;
    var loginRole = request.body.loginRole;

    console.log(username);
    console.log(password);
    console.log(loginRole);

    // table is loginRole variable

    con.query("SELECT * FROM project.admin where name = ? and pass = ? ", [username, password], (err, result, fields) => {
        if (result.length > 0) {
            res.redirect('/home');
        }
        else {
            // res.send("Invalid username or password");
            res.redirect('/');
        }
        res.end();
    })

});


module.exports = router;
