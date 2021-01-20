var _ = require('lodash');
var db = require(`${PROJECT_DIR}/utility/selectQueries`);
var response = { "status": 200, "response": "" };
var moment = require('moment');
var validation = require(`${PROJECT_DIR}/utility/validation`);
const uuidv4 = require('uuid/v4');
//var component = require(`${PROJECT_DIR}/controllers/invoices/invoice.component`);
var dtUtil = require(`${PROJECT_DIR}/utility/dateUtility`);

module.exports = {
    getAll,
  
};

async function getAll(req) {
    try {

        var sql2 = `SELECT * FROM salesforce.Expense_Submission__mdt`;
         var expenses = await client.query(sql2);
        console.log(expenses,'Expense_Submission__mdt');
          
            if (expenses.rowCount != undefined && expenses.rowCount > 0) {
                response.response = { 'success': true, "data": { "expensesSetting": expenses.rows } };
                response.status = 200;
                return response;
            } else {
                response.response = { 'success': false, "data": { "expensesSetting": [] }, "message": "No record found." };
                response.status = 400;
                return response;
            }
    } catch (e) {
        console.log(e);
        response.response = { 'success': false, "data": { "expensesSetting": [] }, "message": "Internal server error." };
        response.status = 500;
        return response;
    }
}