const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Course = require('./course');

const Enrollment = sequelize.define('Enrollment', {
  student_id: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
  course_id: { type: DataTypes.INTEGER, references: { model: Course, key: 'id' } },
});

module.exports = Enrollment;
