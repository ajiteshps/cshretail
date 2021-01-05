const router = require('express').Router();
const express = require('express');
const jsforce = require('jsforce');

const app = express();

const SF_LOGIN_URL = "https://test.salesforce.com";
const SF_USERNAME = "prince@telaminfotech.com";
const SF_PASSWORD = "Pop5289689";
const SF_TOKEN= "EOVVIxgfH8rxXBh0q2vUuKyLN";


const conn = new jsforce.Connection({
    loginUrl:SF_LOGIN_URL
});

conn.login(SF_USERNAME,SF_PASSWORD+SF_TOKEN, (err,result) => {
    if(err)
    res.send('Not Connected To SalesForce');
    else
    console.log('Connected to Salesforce');
    console.log(result);
});

router.get('/check',(req,res)=>{
    res.send('Salesforce');
});
module.exports = router;

