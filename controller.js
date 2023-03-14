const { pool } = require('./connection')
const axios = require('axios');
const router = require('./router');

const getData = (req, res) => {
    let id = req.params.id;
    let name = req.query.name;
    // let sql = "select * from members where Member_id = '"+id+"' and MemberName = '"+name+"'"
    let sql = `select * from members `
    pool.query(sql, (err, result) => {
        if (err) throw err;
        else
       return res.status(200).json({data :result});
    })
}

const allData =  async (req,res)=>{
    const results =   await axios.get('http://localhost:8800/get')
        let data = results.data;
        res.status(200).send( data)
   
};

const postData = (req,res) => {

    let data = (
        Name = req.body.MemberName,
        email = req.body.Email,
        Mobile = req.body.Mobile_no,
        address = req.body.Address
    )

    let sql2 = `insert into members(MemberName,Email,Mobile_no,Address) values('${Name}','${email}',${Mobile},'${address}');`
    pool.query(sql2, data, (err, result) => {

        if (err) throw err;
        else
            res.send({ message: "data submited" });
        console.log("data posted successfully");
    })

}

const insertData = async(req,res)=>{
     let Dataload = {
                MemberName: req.body.MemberName,
                Email: req.body.Email,
                Mobile_no: req.body.Mobile_no,
                Address: req.body.Address
            };
        
            let result = await axios.post('http://localhost:8800/post', Dataload);
        
            let data = result.data;
            console.log(data);
            res.status(200).send(data);
        }


module.exports = { getData, postData, allData, insertData };