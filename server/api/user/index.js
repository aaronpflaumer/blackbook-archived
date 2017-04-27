'use strict';

var express = require('express');
var controller = require('./user.controller');
var auth = require('../../components/middleware/auth');

var router = express.Router();

router.use(auth.verifyToken);

router.get('/:id', controller.show);
router.post('/:email/:password/:user_name', controller.create);
router.put('/:id/:email/:password/:user_name', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
