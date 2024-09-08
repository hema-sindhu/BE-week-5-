const express = require('express');
const { createCourse, updateCourse, deleteCourse, listCourses } = require('../controllers/courseController');
const router = express.Router();

router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);
router.get('/', listCourses);

module.exports = router;
