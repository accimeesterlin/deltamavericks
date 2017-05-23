var express = require("express"),
    bodyParser = require("body-parser"),
    handlebars = require("express-handlebars"),
    methodOverride = require("method-override"),
    session = require("express-session"),
    passport = require("passport");

var app = express(),
    port = process.env.PORT || 8080;


app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(methodOverride("_method"));

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/kidsControllers");
var db = require("./models");


//load passport strategies
require('./config/passport/passport.js')(passport, db); // recruiter table

app.use("/", routes);
db.sequelize.sync({ force: true}).then(function () {
    app.listen(port, function () {
        console.log("App is listening on PORT " + port);
    });
});

