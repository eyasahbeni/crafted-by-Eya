const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const projectRoutes = require('./routes/projectRoutes');
const messageRoutes = require('./routes/messageRoutes');
const techStackRoutes = require('./routes/techStackRoutes');
const app = express();
const PORT = process.env.PORT || 5000;



// Load environment variables
require('dotenv').config();

//middlewares
app.use(cors());
app.use(express.json());

// Routes for projects
app.use('/projects', projectRoutes); // 👈 API endpoint

// Routes for messages
app.use('/messages', messageRoutes);

// Routes for tech stacks
app.use('/tech-stacks', techStackRoutes)
// DB connection + sync models
sequelize.authenticate()
  .then(() => {
    console.log('✅ PostgreSQL connected successfully!');
    return sequelize.sync({ alter: true }); // or { force: true }
  })
  .then(() => {
    console.log('📦 All models synchronized!');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ DB connection failed:', err);
  });


