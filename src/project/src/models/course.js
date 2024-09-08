const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Course = sequelize.define('Course', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  instructor_id: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
});

module.exports = Course;
