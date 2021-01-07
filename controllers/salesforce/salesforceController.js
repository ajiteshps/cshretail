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
        else{
        console.log('Connected to Salesforce');
        }
        });


router.post('/api/ExpensePDF/',async(req,res,err)=>{
   
    var body = { teamId: req.body.teamId, month : 'Jan' };
    var data = await conn.apex.post(body);
        if(err) {
            console.log(err,'API ERROR');
            return res.send({
                status:false
            });
        }
        else{
        console.log(data,'Data from API');
        return res.send({
            status:200,
            data:data
        });
    }
});

   




module.exports = router;

