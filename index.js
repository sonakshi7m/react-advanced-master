const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//heroku links
// https://mysterious-meadow-04344.herokuapp.com/ -identifies the name of your application to heroku
// https://git.heroku.com/mysterious-meadow-04344.git - deployment target. git repo that we can push our locak server to

//mongo db user credentials
//username - p00gz
//pass- SaosvfzeyX30sHH7
//mongo db prod credentials -  myuser, YTtztG9EQq7SFyda
