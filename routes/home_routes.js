const express = require('express')
const router = express.Router();

var con = require("../handlers/database_handler.js");

const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();

router.get('/',encoder ,(request, res) => {

    patientQuery = "SELECT patientID id , patName name, patCNIC cnic, patPhone phoneNo, patAddress address, pass FROM project.patient;"
    employeeQuery = "SELECT empID id, empCNIC cnic, empName name, empPhone phone, empAddress address, gender, empDOB dob, experience, shiftstart, shiftend, erole role, empsal salary, prating rating FROM project.employee;"


    // run both queries and send the resultant data
    con.query   (patientQuery   , (err, result, fields) => {    
        if (err) {
            res.send
            ({
                "error": err.name,
                "errorMessage": err.message,
                "requestFrom": request.url
            })
        }
        else {

            con.query   (employeeQuery   , (err, result2, fields) => {    
                if (err) {
                    res.send
                    ({
                        "error": err.name,
                        "errorMessage": err.message,
                        "requestFrom": request.url
                    })
                }
                else {
                    homePath = "I:/SEMESTER 5/Database Systems/Database Project/public/html/home.ejs"
                    res.render(homePath, {patientData: result, employeeData: result2})
                }
            })
        }
    })
    

});

module.exports = router;

