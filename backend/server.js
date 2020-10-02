const express = require("express")
const app = express()
const methodOverride = require("method-override")
const path = require("path")
const hbs = require('hbs');
const fileUpload = require('express-fileupload');
const con = require("./config/db.js")
const flash = require('connect-flash')
const session = require('express-session')
const connection = require("./config/config.js")
var validator = require('express-validator');
var csrf = require('csrf')

// Using hbs template engine



app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")
app.use('/assets', express.static(__dirname + '/public'));
app.use(session({
	secret: 'secret',
	// resave: true,
	// saveUninitialized: true
}));
app.set('view engine', 'hbs');

// connecting route to database
app.use(function(req, res, next) {
  req.con = con
  res.locals.messages = require('express-messages')(req, res);
  res.locals.session = req.session;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  req.connection = connection;
  next()
})

hbs.registerPartials(__dirname + '/views/partials');
// helper condition
hbs.registerHelper('eq', function () {
  const args = Array.prototype.slice.call(arguments, 0, -1);
  return args.every(function (expression) {
    return args[0] === expression;
  });
});



// parsing body request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.use(flash());

app.use(validator ());
app.use(fileUpload());
// include router
const dashboardRouter = require("./routes/dashboardRouter")
const homeRouter = require("./routes/homeRouter")
const loginRouter = require("./routes/loginRouter")
const informasiRouter = require("./routes/informasiRouter")
const AuthRouter = require("./routes/Admin/AuthRouter")
// Admin
const tiketRouter = require("./routes/Admin/tiketRouter")
const Master_tiketRouter = require("./routes/Admin/Master/Master_tiketRouter")
const Master_artikelRouter = require("./routes/Admin/Master/Master_artikelRouter")
const Master_hastagRouter = require("./routes/Admin/Master/Master_hastagRouter")
const konfigurasiRouter = require("./routes/Admin/konfigurasiRouter")
const userRouter = require("./routes/Admin/userRouter")
// routing

app.use("/", homeRouter)
app.use("/login", AuthRouter)
// Admin
app.use("/master_tiket", Master_tiketRouter)
app.use("/master_artikel", Master_artikelRouter)
app.use("/master_hastag", Master_hastagRouter)
app.use("/tiket", tiketRouter)
app.use("/modul_user", userRouter)
app.use("/konfigurasi", konfigurasiRouter)
// frontend
app.use("/admin", dashboardRouter)
app.use("/login", loginRouter)
app.use("/informasi", informasiRouter)

app.get('*', function (req, res) {
  res.render("404", {
    title: '404 | Tiketing',
  })
});
// starting server
app.listen(3001, function() {
  console.log("server listening on port 3001")
})
