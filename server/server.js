const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');



require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);


// Test DB connection
sequelize.authenticate()
  .then(() => {
    console.log('✅ PostgreSQL connected successfully!');
  })
  .catch((err) => {
    console.error('❌ Connection failed:', err);
  });
// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
