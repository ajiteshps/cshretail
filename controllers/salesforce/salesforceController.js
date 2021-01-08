const express = require('express');
const router = express.Router();
const jsforce = require('jsforce');
// const app = express();
router.post('/localPDFGeneration',localPDFGeneration);
const SF_LOGIN_URL = "https://cse--herokusand.my.salesforce.com";
const SF_USERNAME = "shashwat@cloud-icon.com.irtsandcsh.HerokuSand";
const SF_PASSWORD = "irt@1234";



module.exports = router;

function localPDFGeneration(req) {
    console.log(req.body);
       console.log('Hiting Api');
       const conn =  new jsforce.Connection({
           loginUrl:SF_LOGIN_URL
         });
       var connection  =  conn.login(SF_USERNAME,SF_PASSWORD);
         if(connection){
         console.log('Connected');

         var body = { teamId: req.body.teamId, month : req.body.month };
        var result = conn.apex.post("/api/ExpensePDF/", body, function(err, res) {
            console.log(result);
        });
         }
         else
         console.log('Error');

}

