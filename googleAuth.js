const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy(
  {
    clientID: '288760764257-47jl8dirinfr6h7ugil20ohthbq0e0mq.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google/callback',
  },
  (accessToken, refreshToken, profile, done) => {
    console.log('=================');
    done(null, profile);
    console.log('=================');
  },
));

passport.serializeUser((user, done) => {
  console.log('serializeUser=================');
  console.log({ user });
  console.log('serializeUser=================');
  done(null, user);
});
passport.desserializeUser((user, done) => {
  console.log('desserializeUser=================');
  console.log({ user });
  console.log('desserializeUser=================');
  done(null, user);
});
//! Это засунуть в .env !!!
