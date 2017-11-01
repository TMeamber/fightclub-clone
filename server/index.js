require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const product_controller = require('./product_controller');
const user_controller = require('./user_controller');
const cart_controller = require('./cart_controller');
const chris = "iscool";



const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
})


passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');
    const userData = profile._json;
    db.find_user([userData.identities[0].user_id]).then( user => {
        if(user[0]) {
          return done(null, user[0].id);
        } else {
            db.create_user([
                userData.name,
                userData.email,
                userData.identities[0].user_id
            ]).then( users => {
                return done(null, users[0].id)
            })
        }
    })
}))
passport.serializeUser( function(id, done){
    done(null, id)
})
passport.deserializeUser( function(id,done){
    app.get('db').find_session_user([id]).then(user =>{
        done(null, user[0]);
    })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/auth'
}))
app.get('/auth/me', (req, res) => {
    if (req.user) {
        return res.status(200).send(req.user);
    } else {
        return res.status(401).send('Need to log in.')
    }
})





const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));