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

conn.login(SF_USERNAME,SF_PASSWORD+SF_TOKEN, (err,result) => {
    if(err)
    console.send('Not Connected To SalesForce');
    else{
    console.log('Connected to Salesforce');
    console.log(result);
    }
   
});

router.get('/check',(req,res)=>{
    
});
module.exports = router;

