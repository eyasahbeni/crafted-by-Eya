// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
});

// Register models
const Project = require('./Project')(sequelize, DataTypes);
const TechStack = require('./TechStack')(sequelize, DataTypes);
const ProjectTechStack = require('./ProjectTechStack')(sequelize, DataTypes);
const Message = require('./Message')(sequelize, DataTypes);

// Define associations
Project.belongsToMany(TechStack, {
  through: ProjectTechStack,
  foreignKey: 'project_id',
  otherKey: 'tech_stack_id'
});

TechStack.belongsToMany(Project, {
  through: ProjectTechStack,
  foreignKey: 'tech_stack_id',
  otherKey: 'project_id'
});

// Export everything
module.exports = {
  sequelize,
  Project,
  TechStack,
  ProjectTechStack,
  Message
};
