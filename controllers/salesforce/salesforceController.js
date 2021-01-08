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
         conn.apex.post( body, function(err, res) {
            if(err)
            console.log(err);
            else
            console.log(res);
        });
         }
         else
         console.log('Error');

}

