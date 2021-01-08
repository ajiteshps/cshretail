const express = require('express');
const router = express.Router();
const jsforce = require('jsforce');
// const app = express();
router.post('/localPDFGeneration',localPDFGeneration);
const SF_LOGIN_URL = "https://cse--herokusand.my.salesforce.com";
const SF_USERNAME = "shashwat@cloud-icon.com.irtsandcsh.HerokuSand";
const SF_PASSWORD = "irt@1234";



module.exports = router;

function localPDFGeneration(req,res,next) {
    console.log(req.body);
       console.log('Hiting Api');
       const conn =  new jsforce.Connection({
           loginUrl:SF_LOGIN_URL
         });
       var connection  =  conn.login(SF_USERNAME,SF_PASSWORD);
         console.log(conn,'Connection');
        //  if(connection){
        //     res.json({status:true,'message':'Connected to Salesforce'});
        //     }
        //     else{
        //     res.json({status:false,'message':'Not Connected'});
        //     }
         var body = { teamId: req.body.teamId, month : req.body.month };

         conn.apex.post("/api/ExpensePDF/",body)
         .then(response => res.status(200).json({
             status:true,
             message:response.message
         }))
         .catch(err => res.status(400).json({
            status:false,
            message:err.message
        })) ;
            
        
         }
       



