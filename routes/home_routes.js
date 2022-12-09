const express = require('express')
const router = express.Router();


router.get('/', (request, res) => {
    res.sendFile("I:/SEMESTER 5/Database Systems/Database Project/public/html/home.html")
});

module.exports = router;

