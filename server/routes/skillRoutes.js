const express = require('express');
const router = express.Router();
const { getSkills, createSkill, updateSkill, deleteSkill } = require('../controllers/skillController');

router.route('/').get(getSkills).post(createSkill);
router.route('/:id').put(updateSkill).delete(deleteSkill);

module.exports = router;