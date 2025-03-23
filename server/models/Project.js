// server/models/project.js
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
    githubLink: {
      type: DataTypes.STRING,
    },
    liveLink: {
      type: DataTypes.STRING,
    },
  });

  return Project;
};
