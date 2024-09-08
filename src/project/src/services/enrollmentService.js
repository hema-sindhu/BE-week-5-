const Enrollment = require('../models/enrollment');

exports.enrollStudent = async ({ student_id, course_id }) => {
  const enrollment = await Enrollment.create({ student_id, course_id });
  return enrollment;
};

exports.withdrawStudent = async (id) => {
  await Enrollment.destroy({ where: { id } });
};

exports.listEnrollments = async () => {
  return Enrollment.findAll();
};
