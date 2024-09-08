const Course = require('../models/course');

exports.createCourse = async (courseData) => {
  const course = await Course.create(courseData);
  return course;
};

exports.updateCourse = async (id, courseData) => {
  await Course.update(courseData, { where: { id } });
  return Course.findByPk(id);
};

exports.deleteCourse = async (id) => {
  await Course.destroy({ where: { id } });
};

exports.listCourses = async () => {
  return Course.findAll();
};
