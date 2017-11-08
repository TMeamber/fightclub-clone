require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const product_controller = require('./controllers/product_controller');
const user_controller = require('./controllers/user_controller');
const cart_controller = require('./controllers/cart_controller');



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
    console.log("DB connected")
    app.set('db', db);
})


passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    const userData = profile._json;
    db.find_user([userData.identities[0].user_id]).then(user => {
        if (user[0]) {
            return done(null, user[0].id);
        } else {
            db.create_user([
                userData.name,
                userData.email,
                userData.identities[0].user_id
            ]).then(users => {
                return done(null, users[0].id)
            })
        }
    })
}))
passport.serializeUser(function (id, done) {
    done(null, id)
})
passport.deserializeUser(function (id, done) {
    app.get('db').find_user_session([id]).then(user => {
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
//gets products from products table in database
app.get('/api/product/brand', product_controller.getProduct)
//sorts through and pulls exactly what brand you search for
app.get('/api/product/brand/:brand', product_controller.getBrand)

//updates cart
app.put('/api/cart', cart_controller.updateCart)
//gets the products to show up in the cart
// app.get('/api/cart', cart_controller.getCart)
//when purchased or deleted remove items from cart
app.delete('/api/cart/:id', cart_controller.deleteCart)
//add to cart
app.post('/api/cart', cart_controller.addCart)
//displays cart products
app.get('/api/cart', cart_controller.displayCart)

app.use(bodyParser.json());
app.use(cors())


app.post('/api/payment', function(req, res, next){
//convert amount to pennies
const amountArray = req.body.amount.toString().split('');
const pennies = [];
for (var i = 0; i < amountArray.length; i++) {
if(amountArray[i] === ".") {
  if (typeof amountArray[i + 1] === "string") {
    pennies.push(amountArray[i + 1]);
  } else {
    pennies.push("0");
  }
  if (typeof amountArray[i + 2] === "string") {
    pennies.push(amountArray[i + 2]);
  } else {
    pennies.push("0");
  }
    break;
} else {
    pennies.push(amountArray[i])
}
}
const convertedAmt = parseInt(pennies.join(''));

const charge = stripe.charges.create({
amount: convertedAmt, 
currency: 'usd',
source: req.body.token.id,
description: 'Test charge from react app'
}, function(err, charge) {
if (err) return res.sendStatus(500)
return res.sendStatus(200);
// if (err && err.type === 'StripeCardError') {
//   // The card has been declined
// }
});
});







const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));