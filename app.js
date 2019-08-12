const express = require('express');
const authRoutes = require('./routes/auth');
const analitycsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');


const app = express();


app.use('/api/auth', authRoutes);
app.use('/api/analitycs', analitycsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);


module.exports = app