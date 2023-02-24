const bcrypt = require('bcrypt');
const router = require('express').Router();
const { User } = require('../../db/models');

/**
 * Завершает запрос с ошибкой аутентификации
 * @param {object} res Ответ express
 * @param err  сообщение об ошибке
 */

const failAuth = (res, err) => res.status(401).json({ err });

exports.checkUserAndCreateSession = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username }, raw: true });

    if (!user) return failAuth(res, ' Неправильное имя/пароль');

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return failAuth(res, ' Неправильное имя или пароль');

    req.session.user = { id: user.id, name: user.username };
    res.status(200).end();
  } catch (err) {
    console.error('Err message:', err.message);
    console.error('Err code', err.code);
    failAuth(res, err.message);
  }
};

exports.createUserAndSession = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      username,
      password: hashedPassword,
      email,
    });

    req.session.user = { id: user.id, name: user.username };
    console.log('Session Success');
    res.status(200).end();
  } catch (err) {
    const errMsg = err.message;
    console.error('Err message:', err.message);
    console.error('Err code', err.code);
    failAuth(res, errMsg);
  }
};

exports.destroySession = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie('app').redirect('/');
  });
};
