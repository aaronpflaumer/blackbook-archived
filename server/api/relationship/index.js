'use strict';

var express = require('express');
var controller = require('./relationship.controller');
var auth = require('../../components/middleware/auth');

var router = express.Router();

router.use(auth.verifyToken);

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/:source_character_id/:dest_character_id/:source_type_id/:dest_type_id', controller.create);
router.put('/:id/:source_character_id/:dest_character_id/:source_type_id/:dest_type_id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
