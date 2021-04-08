const express = require('express');
const app = express();
const passport = require('passport');
const port = 9800;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user,cb) =>{
    cb(null,user)
})

passport.use(new GoogleStrategy({
    clientID: '',
    clientSecret: '',
    callbackURL: "http://localhost:9800/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
        userprofile = profile
        return done(null, userprofile);
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/profile');
  });

app.get('/',(req,res) => {
    res.send('<a href="/auth/google">Sign In with Google</a>')
})


app.get('/error',(req,res) => {
    res.send('Error while login')
})
  

app.get('/profile',(req,res) => {
    res.send(userprofile)
})

app.listen(port)
  