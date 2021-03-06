const express = require('express');
const router = express.Router();
const orderService = require('./order.service');
var _ = require('lodash');

// routes

router.get('/getAll', getAll);
router.get('/detail', detail);
router.post('/placeOrder', placeOrder);
module.exports = router;

/**
 * This function is used to disply all meetings
 * @param {*} req Blank
 * @param {*} res json body of meeting list
 * @param {*} next 
 * @author Rohit Ramawat 
 * @since 12/17/2019
 * @version 1
 * @email rohit.ramawat@zoxima.com
 */
function getAll(req, res, next) {
    console.log(req.headers);
    try {

        
        if (!_.isEmpty(req.headers.agentid)) {

            orderService.getAll(req)
                .then(orders => res.status(orders.status).json(orders.response))
                .catch(err => next(err));
        } else {
            res.status(400).json({ "success": false, "message": "You do not have authorised access." });
        }
    } catch (e) {
        res.status(500).json({ "success": false, "error": "Internal server error." });
    }
}


/**
 * This function is used to disply meeting detail
 * @param {*} req meeting id
 * @param {*} res json body of meeting detail
 * @param {*} next 
 * @author Rohit Ramawat 
 * @since 12/17/2019
 * @version 1
 * @email rohit.ramawat@zoxima.com
 */
function detail(req, res, next) {
    try {
        
        if (!_.isEmpty(req.headers.agentid) && req.query.id != undefined) {
            orderService.detail(req)
                .then(meetingDetail => res.status(meetingDetail.status).json(meetingDetail.response))
                .catch(err => next(err));
        } else {
            res.status(400).json({ "success": false, "message": "Mandatory parameter(s) are missing." });
        }
    } catch (e) {
        console.log(`Error(catch):::: `,e);
        res.status(500).json({ "success": false, "error": "Internal server error." });
    }
}
/**
 * This function is used to add new meeting 
 * @param {*} req 
 * @param {*} res json body of meeting detail
 * @param {*} next 
 * @author Rohit Ramawat 
 * @since 12/17/2019
 * @version 1
 */
function placeOrder(req, res, next) {
    try {
        
        if (!_.isEmpty(req.headers.agentid)) {
            orderService.placeOrder(req)
                .then(meetingDetail => res.status(meetingDetail.status).json(meetingDetail.response))
                .catch(err => next(err));
        } else {
            res.status(400).json({ "success": false, "message": "Mandatory parameter(s) are missing." });
        }
    } catch (e) {
        console.log(`Error(catch):::: `,e);
        res.status(500).json({ "success": false, "error": "Internal server error." });
    }
}


