const EnrollmentService = require('../services/enrollmentService');

exports.enrollStudent = async (req, res) => {
  try {
    const enrollment = await EnrollmentService.enrollStudent(req.body);
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.withdrawStudent = async (req, res) => {
  try {
    await EnrollmentService.withdrawStudent(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listEnrollments = async (req, res) => {
  try {
    const enrollments = await EnrollmentService.listEnrollments();
    res.json(enrollments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
