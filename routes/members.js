const express = require('express');
const router = express.Router();
const { getMembers, addMember } = require('../controllers/members');

router.route('/').get(getMembers).post(addMember);

module.exports = router;