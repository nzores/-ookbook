require('@babel/register');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

//routs import
const MainRoutes = require('./routes/Main.Routes');
const UserPage = require('./routes/UserPage.Routes');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public/')));

app.use('/', MainRoutes);
// app.use('/auth', authRouter);
app.use('/user', UserPage);

app.listen(process.env.PORT, () => console.log('Server listen port:', process.env.PORT));
