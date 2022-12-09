var con = require("./handlers/database_handler.js");

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();

const PORT = 80

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log("Listening on port " + PORT + " 😎")
    console.log("localhost:80")
})


con.connect((err) => {
    if (err) {
        console.log('\x1b[31m%s\x1b[0m', err);
        throw err;
    }
    console.log('\x1b[32m%s\x1b[0m', 'Connected to database!');
})

// get request on root route
app.get('/', (request, res) => {
    res.sendFile(__dirname + "/public/html/login.html")
});


// post request on root route
app.post('/login', encoder , (request, res) => {

    console.log("Post request on login")

    var username = request.body.loginUsername;
    var password = request.body.loginPassword;

    console.log(username);
    console.log(password);

    con.query("SELECT * FROM project.patient where patName = ? and pass = ? ", [username, password]  , (err, result, fields) => {
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

app.post('/signup', encoder, (request, res) => {

    try {
        console.log("Post request on signup")
        // console.log(request.body)

        var username = request.body.signupUsername;
        var password = request.body.signupPassword;
        var confirmPassword = request.body.signupConfirmPassword;
        var signupDropDownValue = request.body.signupRole;

        console.log(username)
        console.log(password)
        console.log(confirmPassword)
        console.log(signupDropDownValue)
    } catch (e) {
        res.send({
            "error" : e.name,
            "errorMessage" : e.message,
            "requestFrom": request.url
        })
    }
    
})

app.get('/home', (request, res) => {
    res.sendFile(__dirname + "/public/html/home.html")
});

app.get('/signup' , (request, res) => {
    res.sendFile(__dirname + "/public/html/signup.html")
})

app.get('/login' , (request, res) => {
    res.sendFile(__dirname + "/public/html/login.html")
})
