const router = require('express').Router();
const express = require('express');
const jsforce = require('jsforce');

const app = express();

const SF_LOGIN_URL = "https://irt-digitalanalytics.my.salesforce.com";
const SF_USERNAME = "hrms@icon.com";
const SF_PASSWORD = "SanaTan@123";
 const conn = new jsforce.Connection({
        loginUrl:SF_LOGIN_URL
    });

    conn.login(SF_USERNAME,SF_PASSWORD, (err,result) => {
        if(err)
        console.send('Not Connected To SalesForce');
        else
        console.log('Connected to Salesforce');
        });


router.post('/api/ExpensePDF/',async(req,res,err)=>
{
    try{
        console.log(req.body,'data form frontend');
    var body = { teamId: req.body.teamId, month : req.body.month };
     await conn.apex.post(body,(err,data2) =>{
        if (err) {
            res.json({ 'success': false,'error': err});
        }
        else
        res.json({ 'success': true, 'message': "Data Send",'data': data2});
    });

       
        }
    catch(err) {
        console.log(err);
    }
});

   




module.exports = router;

