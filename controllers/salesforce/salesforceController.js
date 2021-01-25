const express = require('express');
const router = express.Router();
const jsforce = require('jsforce');
// const app = express();
const salesforceService  = require('./salesforce.Service');
router.post('/localPDFGeneration',localPDFGeneration);
router.post('/OutStationPDFGeneration',OutStationPDFGeneration);





module.exports = router;

 function localPDFGeneration(req,res,next) {
    
        salesforceService.connection()
        .then(conn => {
            console.log(conn,'Connection VAR');
        var body = { teamId: req.headers.agentid, month : req.body.month }; // aprovers SFID changed to agent ID
        console.log(body,'Body Local Expense')
            conn.apex.post("/api/ExpensePDF/",body)
            .then(response => res.status(200).json({
                status:true,
                message:response.message
            }))
            .catch(err => res.status(400).json({
                status:false,
                message:err.message
        })) ;
        })
        .catch(err => res.status(400).json({
           status:false,
           message:err.message
    })) ;
         
}
       
function OutStationPDFGeneration(req,res,next) {
    
    salesforceService.connection()
    .then(conn => {
        console.log(conn,'Connection VAR');
        var body = { teamId: req.headers.agentid, month : req.body.month }; // aprovers SFID changed to agent ID
        conn.apex.put("/api/ExpensePDF/",body)
        .then(response => res.status(200).json({
            status:true,
            message:response.message
        }))
        .catch(err => res.status(400).json({
            status:false,
            message:err.message
    })) ;
    })
    .catch(err => res.status(400).json({
       status:false,
       message:err.message
})) ;
     
}
  


