const express = require('express');
const router = express.Router();
const jsforce = require('jsforce');
// const app = express();
router.post('/localPDFGeneration',localPDFGeneration);
const SF_LOGIN_URL = "https://cse--herokusand.my.salesforce.com";
const SF_USERNAME = "shashwat@cloud-icon.com.irtsandcsh.HerokuSand";
const SF_PASSWORD = "irt@1234";



module.exports = {
 
   localPDFGenration,
  
};

async function localPDFGenration(req) {

    try {

       console.log(req.body,'TESTING')

       
    } catch (e) {
        console.log(e);
        response.status = 500;
        response.response = { "success": false, "message": "Internal server missing." };
        return response;
    }
}
