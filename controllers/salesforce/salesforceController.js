const router = require('express').Router();
const express = require('express');
const jsforce = require('jsforce');

const app = express();

const SF_LOGIN_URL = "https://cse--herokusand.my.salesforce.com";
const SF_USERNAME = "shashwat@cloud-icon.com.irtsandcsh.HerokuSand";
const SF_PASSWORD = "irt@1234";


    // conn.login(SF_USERNAME,SF_PASSWORD, (err,result) => {
    //     if(err)
    //     console.log('Not Connected To SalesForce',err);
    //     else
    //     console.log('Connected to Salesforce');
    //     });


// router.post('/api/ExpensePDF/',async(req,res)=>
// {
    
//     console.log(conn,'Connection');
//     console.log(req.body);
//     var body = { teamId: req.body.teamId, month : req.body.month };
//      var  data = await conn.apex.post(body, (err,response) => {
//         if (data) {
//             res.json({ 'success': true,'data': data});
//         }
//         else
//         res.json({ 'success': false, 'error': err});
//     });
        
    
// });

// exports.localPDFGeneration = async (req, res, next) => {
//     const conn = new jsforce.Connection({
//         loginUrl:SF_LOGIN_URL
//     });
//     await conn.login(SF_USERNAME,SF_PASSWORD);
//     console.log(conn);
//   };

router.post('/localPDF', async (req,res) => {
    const conn =  new jsforce.Connection({
        loginUrl:SF_LOGIN_URL
    });
    await conn.login(SF_USERNAME,SF_PASSWORD);
    console.log(conn,'connection');
});

   
// router.post('/localPDFGeneration',localPDFGeneration);

// async function localPDFGeneration(req, res, next) {
//     console.log('Hiting Api');
//     const conn =  new jsforce.Connection({
//         loginUrl:SF_LOGIN_URL
//     });
//     await conn.login(SF_USERNAME,SF_PASSWORD);
//     console.log(conn,'connection');

//   };


module.exports = router;

