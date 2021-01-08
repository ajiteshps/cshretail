const jsforce = require('jsforce');
const SF_LOGIN_URL = "https://cse--herokusand.my.salesforce.com/";
const SF_USERNAME = "shashwat@cloud-icon.com.irtsandcsh.herokusand";
const SF_PASSWORD = "ITC@1234";
module.exports = {
    connection
}
async function connection() {

       console.log('Hiting Api');
       const conn =  new jsforce.Connection({
           loginUrl:SF_LOGIN_URL
         });
        await conn.login(SF_USERNAME,SF_PASSWORD);
         console.log(conn,'Connection');
         return conn;

   
  };
