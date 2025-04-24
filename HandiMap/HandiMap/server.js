const express = require('express');
const path = require('path');
const { sequelize } = require('./models');
const estRoutes = require('./routes/establishments');
const searchRoutes = require('./routes/search');
const questRoutes = require('./routes/questionnaire');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Sync without dropping existing tables
sequelize.sync();

// Routes
app.use('/', searchRoutes);
app.use('/establishments', estRoutes);
app.use('/questionnaire', questRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
