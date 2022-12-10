const express = require('express');
const router = express.Router();
var con = require("../handlers/database_handler.js");

const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();


router.get('/', (request, res) => {
    res.sendFile("I:/SEMESTER 5/Database Systems/Database Project/public/html/signup.html")
})

router.post('/', encoder, (request, res) => {

    try {
        console.log("Post request on signup")

        var username = request.body.signupUsername;
        var password = request.body.signupPassword;
        var confirmPassword = request.body.signupConfirmPassword;

        console.log(username)
        console.log(password)
        console.log(confirmPassword)
            

        if (password == confirmPassword) {
            con.query("INSERT INTO project.admin (name, pass) VALUES (?, ?)", [username, password], (err, result, fields) => {
                if (err) {
                    res.redirect('/signup');
                }
                else {
                    res.redirect('/home');
                }
            })
        }
        else{
            res.redirect('/signup');
        }

    } catch (e) {
        res.send({
            "error": e.name,
            "errorMessage": e.message,
            "requestFrom": request.url
        })
    }

})


module.exports = router;
