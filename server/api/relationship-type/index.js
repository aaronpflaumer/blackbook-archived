'use strict';

var express = require('express');
var controller = require('./relationship-type.controller');
var auth = require('../../components/middleware/auth');

var router = express.Router();

router.use(auth.verifyToken);

router.get('/', controller.index);
router.post('/:name', controller.create);
router.put('/:id/:name', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
