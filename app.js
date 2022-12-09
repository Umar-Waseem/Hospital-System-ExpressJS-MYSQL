const express = require('express');
const app = express();

// handlers
var con = require("./handlers/database_handler.js");

// routes
const wardRoutes = require("./routes/ward_routes.js");
const patientRoutes = require("./routes/patient_routes.js");
const loginRoutes = require("./routes/login_routes.js");
const signUpRoutes = require("./routes/signup_routes.js");
const homeRoutes = require("./routes/home_routes.js")

// middleware

app.use(express.static(__dirname + '/public'));

app.use('/ward', wardRoutes);
app.use('/patient', patientRoutes);
app.use('/', loginRoutes);
app.use('/signup', signUpRoutes);
app.use('/home', homeRoutes);

// start server
const PORT = 80

app.listen(PORT, () => {
    console.log("Listening on port " + PORT + " 😎")
    console.log("localhost:80")
})

// database connection
con.connect((err) => {
    if (err) {
        console.log('\x1b[31m%s\x1b[0m', err);
        throw err;
    }
    console.log('\x1b[32m%s\x1b[0m', 'Connected to database!');
})




