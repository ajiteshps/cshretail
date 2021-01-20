const express = require('express');
const router = express.Router();
var _ = require('lodash');
const ExpenseSettingService = require('./ExpenseSettingservice');

// routes

router.get('/getAll', getAll);
module.exports = router;

function getAll(req, res, next) {
    try {
        if (!_.isEmpty(req.headers.agentid)) {
            ExpenseSettingService.getAll(req)
                .then(tours => res.status(tours.status).json(tours.response))
                .catch(err => next(err));
        } else {
            res.status(400).json({ "success": false, "message": "You do not have authorised access." });
        }
    } catch (e) {
        res.status(500).json({ "success": false, "error": "Internal server error." });
    }
}




