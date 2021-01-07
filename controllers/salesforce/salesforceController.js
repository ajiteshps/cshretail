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
    var body = { teamId: req.body.teamId, month : req.body.month };
    var data = await conn.apex(body);
        if(err) {
            console.log(err,'API ERROR');
            res.json({ 'success': false });
        }
        else{
        console.log(data,'Data from API');
        res.json({ 'success': true, 'message': "Data Send" });
            }
        }
    catch(err) {
        console.log(err);
    }
});

   




module.exports = router;

