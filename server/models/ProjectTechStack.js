// models/ProjectTechStack.js
module.exports = (sequelize, DataTypes) => {
    const ProjectTechStack = sequelize.define('ProjectTechStack', {
      project_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'projects',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      tech_stack_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tech_stack',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    }, {
      tableName: 'project_tech_stack',
      timestamps: false,
    });
  
    return ProjectTechStack;
  };
  