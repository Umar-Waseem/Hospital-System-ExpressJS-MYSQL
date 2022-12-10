const express = require('express')
const router = express.Router();



const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();

var con = require("../handlers/database_handler.js");

router.get('/', (request, res) => {
    res.render("I:/SEMESTER 5/Database Systems/Database Project/public/html/ward.ejs", { data: [] })
})


router.post('/',  encoder, (request, res) => {

    var wardNo = request.body.wardNoInputFieldValue;

    console.log(wardNo);

    con.query("SELECT w.wardName, e.empName AS DaySister, r.empName AS NightSister, p.patientID, p.patName, cu.careunitID, m.empName AS Consultant, COUNT(s.empID) AS StaffNurses, t.trstart AS DateAdmitted FROM employee s, ward w, CareUnit cu, appointment a, nurse n, daySister ds, nightSister ns, employee e, employee r, employee m, consultant c, patient p RIGHT OUTER JOIN treatment t ON p.patientID = t.patientID WHERE e.empID = ds.daysisId AND r.empID = ns.nightsisId AND m.empID = c.consID AND s.empID = n.nurseID AND cu.inchargeID = n.nurseID AND w.wardID = n.wardID AND w.wardID = cu.wardID AND t.wardID = w.wardID AND a.appID = t.appointID AND a.consultantID = c.consID AND ds.registerType = w.wardName AND w.wardName = ?  GROUP BY w.wardName, e.empName, r.empName, p.patientID, p.patName, cu.careunitID, m.empName, t.trstart;", [wardNo], (err, result, fields) => {
        if (err)
            throw err;

        res.render("I:/SEMESTER 5/Database Systems/Database Project/public/html/ward.ejs", { data: result });

    });

})

module.exports = router;