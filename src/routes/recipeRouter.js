const ReactDOMServer = require('react-dom/server');
const React = require('react');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const sequelize = require('sequelize');

const Main = require('../views/Main');

const Signin = require('../views/Signin');
const Signup = require('../views/Signup');
const notFound = require('../views/NotFound404');

const Personal = require('../views/Data/Personal');

const { User } = require('../../db/models');

const render = require('../utils/renderTemplate');

const failAuth = (res, err) => res.status(401).json({ err });