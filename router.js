const express = require('express');
const router = express.Router();
const { getData, postData,allData, insertData } = require('./controller');

router.get("/get", getData)
router.get("/getdata", allData)
router.post("/post", postData)
router.post("/insertData",insertData)


module.exports = router;