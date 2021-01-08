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
         if(connection){
            res.json({status:true,'data':'Connected'});
            }
            else{
            res.json({status:false,'data':'Not Connected'});
            }
         var body = { teamId: req.body.teamId, month : req.body.month };

         conn.apex.post("/api/ExpensePDF/",body).then(response => console.log(response,'RESPONSE')).catch(err => console.log(err,'ERROR')) ;
        //  console.log(result,'DATA FROM SALESFORCE');
        //  {
        //     if(err)
        //     console.log(err,'Error in Api');
        //     else{
        //     console.log(response,'Response');
        //     }
        // };
        
         }
       



