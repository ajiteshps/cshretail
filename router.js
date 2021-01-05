
var userCtrl = require("./controllers/users/user.controller");
var agentCtrl = require("./controllers/agents/agent.controller");
var sellerCtrl = require("./controllers/sellers/seller.controller");
var productCtrl = require("./controllers/products/product.controller");
var meetingCtrl = require("./controllers/meetings/meeting.controller");
var orderCtrl = require("./controllers/orders/order.controller");
var areaCtrl = require("./controllers/areas/area.controller");
var prodCatCtrl = require("./controllers/productCategories/productCategory.controller");
var ordLineCtrl = require("./controllers/order-line/order-line.controller");
var competitorCtrl = require("./controllers/competitors/competitor.controller");
//var campaignCtrl = require("./controllers/campaigns/campaign.controller");
var eventCtrl = require("./controllers/events/event.controller");
var eventParticipantCtrl = require("./controllers/eventParticipants/eventParticipant.controller");
var sitesCtrl = require("./controllers/sites/site.controller");
var siteProdCtrl = require("./controllers/siteProducts/siteProduct.controller");
var influencerCtrl = require("./controllers/influencers/influencer.controller");
var dashCtrl = require("./controllers/dashboard/dashboard.controller");
var pNotiCtrl = require("./controllers/push-notifications/push-notification.controller");
var cityCtrl = require("./controllers/cities/city.controller");
var dealerOrderCtrl = require("./controllers/dealer-orders/dealer-order.controller");
var dealerOrderLineItemCtrl = require("./controllers/dealer-order-line-items/dealer-order-line-item.controller");
var invoiceCtrl = require("./controllers/invoices/invoice.controller");
var invloceLineItemsCtrl = require("./controllers/invoice-line-items/invoice-line-item.controller");
var outstandingCtrl = require("./controllers/outstandings/outstanding.controller");
var expenseCtrl = require("./controllers/expenses/expense.controller");
var expenseItemCtrl = require("./controllers/expenses-items/expense-item.controller");
var tourCtrl = require("./controllers/tours/tour.controller");
var fileCtrl = require("./controllers/files/file.controller");
var salesforce = require("./controllers/salesforce/salesforceController");

module.exports = function(app){
    app.use("/users", userCtrl);
    app.use("/agents", agentCtrl);
    app.use("/sellers", sellerCtrl);
    app.use("/products", productCtrl);
    app.use("/visits", meetingCtrl);
    app.use("/orders", orderCtrl);
    app.use("/areas", areaCtrl);
    app.use("/productCategories", prodCatCtrl);
    app.use("/order-line", ordLineCtrl);
    app.use("/competitors", competitorCtrl);
    app.use("/products", productCtrl);
    //app.use("/campaigns", campaignCtrl);
    app.use("/events", eventCtrl);
    app.use("/eventParticipants", eventParticipantCtrl);
    app.use("/sites", sitesCtrl);
    app.use("/siteProducts", siteProdCtrl);
    app.use("/influencers", influencerCtrl);
    app.use("/dashboard", dashCtrl);
    app.use("/push-notifications", pNotiCtrl);
    app.use("/cities", cityCtrl);
    app.use("/dealer-orders", dealerOrderCtrl);
    app.use("/dealer-order-line-items", dealerOrderLineItemCtrl);
    app.use("/invoices", invoiceCtrl);
    app.use("/invoice-line-items", invloceLineItemsCtrl);
    app.use("/outstandings", outstandingCtrl);
    app.use("/expenses", expenseCtrl);
    app.use("/expense-item", expenseItemCtrl);
    app.use("/tours", tourCtrl);
    app.use("/files", fileCtrl);
    app.use("/salesforce",salesforce);
};
