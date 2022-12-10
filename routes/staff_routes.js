// select e.empID, e.empName, e.erole, e.prating, d.depname
// from employee e, department d
// where e.empID = d.depHead;

const express = require('express')
const router = express.Router();



const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();

var con = require("../handlers/database_handler.js");

router.get('/', (request, res) => {
    res.render("I:/SEMESTER 5/Database Systems/Database Project/public/html/staff.ejs", { data: [] })
})

router.post('/',  encoder, (request, res) => {

    var staffNo = request.body.empIDInputFieldValue;

    console.log(staffNo);

    con.query("select e.empID, e.empName, e.erole, e.prating, d.depname, e.empAddress from employee e, department d where e.empID = ?;", [staffNo], (err, result, fields) => {
        if (err)
            throw err;

        console.log(result)

        res.render("I:/SEMESTER 5/Database Systems/Database Project/public/html/staff.ejs", { data: result });

    });

})

module.exports = router;