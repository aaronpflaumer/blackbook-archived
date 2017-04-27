'use strict';

var express = require('express');
var controller = require('./character-tag.controller');
var auth = require('../../components/middleware/auth');

var router = express.Router();

router.use(auth.verifyToken);

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/:character_id/:name/:value', controller.create);
router.put('/:id/:tag_id/:value', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
