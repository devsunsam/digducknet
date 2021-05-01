
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/get/data', controller.api.getData);

router.post('/add/data');
router.post('/modify/data');
router.post('/delete/data');

router.post('/send/pw', controller.api.sendPw)
router.post('/add/board', controller.add.board);
router.post('/get/board', controller.get.board)

router.post('/get/board_cnt', controller.get.board_cnt);
router.post('/get/board_data', controller.get.board_data);

module.exports = router;