const express = require('express');
const router = express.Router();


var con = require("../handlers/database_handler.js");

const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();




router.get('/:patientNo', (request, res) => {

    var patientNo = request.params.patientNo;
    
        con.query("select p.patientID as PatientNo, p.patName as PatientName, e.empID as DoctorNo, e.empName as DoctorName, r.empName as ConsultantName, e.empDOB, cm.complaintID as ComplaintNo, t.trID as TreatmentNo, t.trstart as DateTreatmentStarted, t.trend as DateTreatmentEnded from appointment a, doctor d, employee e, employee r, consultant c, treatment t, patient p right outer join complaints cm on p.patientID = cm.patientID where p.patientID = ? and e.empID = d.doctorID and r.empID = c.consID and a.complaintID = cm.complaintID and a.consultantID = c.consID and a.doctorID = d.doctorID order by p.patientID", [patientNo], (err, result, fields) => {
            if (err)
                throw err;

            res.render("I:/SEMESTER 5/Database Systems/Database Project/public/html/patient.ejs", { data: result });

        });

})



module.exports = router;


