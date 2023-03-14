const express = require("express");
const mysql = require('mysql');
const axios = require('axios');
const port = 8800;
const config = require('./config');
const router = require("./router")
// const { getData, postData,allData, insertData } = require('./controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",router)

// app.get("/get", getData)
// app.get("/getdata", allData)
// app.post("/post", postData)
// app.post("/insertData",insertData)



app.listen(port, () => {
    console.log(`server connected at port ${port}`);
})  