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

    con.query("select w.wardName, e.empName as DaySister, r.empName as NightSister, p.patientID, p.patName, cu.careunitID, m.empName as Consultant, COUNT(s.empID) as StaffNurses, t.trstart as DateAdmitted from employee s, ward w, CareUnit cu, appointment a, nurse n, nurse mm, daySister ds, nightSister ns, employee e, employee r, employee m, consultant c, patient p right outer join treatment t on p.patientID = t.patientID where e.empID = ds.daysisId and r.empID = ns.nightsisId and m.empID = c.consID and s.empID = mm.nurseID and mm.wardID = w.wardID and cu.inchargeID = n.nurseID and w.wardID = n.wardID and w.wardID = cu.wardID and t.wardID = w.wardID and a.appID = t.appointID and a.consultantID = c.consID and ds.registerType = w.wardName group by w.wardName, e.empName, r.empName, p.patientID, p.patName, cu.careunitID, m.empName, t.trstart having w.wardName in (?); ", [wardNo], (err, result, fields) => {
        if (err)
            throw err;

        res.render("I:/SEMESTER 5/Database Systems/Database Project/public/html/ward.ejs", { data: result });

    });

})

module.exports = router;