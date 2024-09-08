const express = require('express');
const { enrollStudent, withdrawStudent, listEnrollments } = require('../controllers/enrollmentController');
const router = express.Router();

router.post('/', enrollStudent);
router.delete('/:id', withdrawStudent);
router.get('/', listEnrollments);

module.exports = router;
