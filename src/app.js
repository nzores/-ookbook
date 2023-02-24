require('@babel/register');
require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const createError = require('http-errors');

const cookieParser = require('cookie-parser');
const dbConnect = require('../db/config/dbconnect');

const MainRoutes = require('./routes/Main.Routes');
const UserPage = require('./routes/UserPage.Routes');
const RecipePage = require('./routes/RecipesPage.Routes');
const authRoutes = require('./routes/auth.Routes');
/// //////////!!!!!
// const passport = require('passport');
// const GoogleRouter = require('./routes/google.router');
// require('../googleAuth');
const Error = require('./views/Error');

const app = express();

const PORT = process.env.PORT || 3000;

dbConnect();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(cookieParser());

const sessionConfig = {
  name: 'app',
  store: new FileStore({}),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'development',
    maxAge: 1000 * 60 * 60 * 24 * 10,
  },
};

app.use(session(sessionConfig));

app.use((req, res, next) => {
  console.log('\n\x1b[33m', 'req.session.user :', req.session?.user);
  res.locals.username = req.session?.user?.name;
  next();
});

app.use('/', MainRoutes);
app.use('/auth', authRoutes);
app.use('/user', UserPage);
app.use('/recipe', RecipePage);
/// //////////////////////////
// app.use('/googleAuth', GoogleRouter);
// app.use(passport.initialize());
// app.use(passport.session());

// Если HTTP-запрос дошёл до этой строчки, значит ни один из ранее встречаемых рутов не ответил
// на запрос.Это значит, что искомого раздела просто нет на сайте.Для таких ситуаций используется
// код ошибки 404. Создаём небольшое middleware, которое генерирует соответствующую ошибку.
app.use((req, res, next) => {
  const error = createError(
    404,
    'Запрашиваемой страницы не существует на сервере.',
  );
  next(error);
});

// Отлавливаем HTTP-запрос с ошибкой и отправляем на него ответ.
app.use((err, req, res) => {
  // Получаем текущий ражим работы приложения.
  const appMode = req.app.get('env');
  // Создаём объект, в котором будет храниться ошибка.
  let error;

  // Если мы находимся в режиме разработки, то отправим в ответе настоящую ошибку.
  // В противно случае отправим пустой объект.
  if (appMode === 'development') {
    error = err;
  } else {
    error = {};
  }

  // Записываем информацию об ошибке и сам объект ошибки в специальные переменные,
  // доступные на сервере глобально, но только в рамках одного HTTP - запроса.
  res.locals.message = err.message;
  res.locals.error = error;

  // Задаём в будущем ответе статус ошибки. Берём его из объекта ошибки, если он там есть.
  // В противно случае записываем универсальный стату ошибки на сервере - 500.
  res.status(err.status || 500);
  // Ренедрим React-компонент Error и отправляем его на клиент в качестве ответа.
  const errorPage = React.createElement(Error, res.locals);
  const html = ReactDOMServer.renderToStaticMarkup(errorPage);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
