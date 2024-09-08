const CourseService = require('../services/courseService');

exports.createCourse = async (req, res) => {
  try {
    const course = await CourseService.createCourse(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await CourseService.updateCourse(req.params.id, req.body);
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    await CourseService.deleteCourse(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listCourses = async (req, res) => {
  try {
    const courses = await CourseService.listCourses();
    res.json(courses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
