const express = require("express")
const app = express()
var methodOverride = require("method-override")
const path = require("path")
const hbs = require('hbs');
const fileUpload = require('express-fileupload');
const con = require("./config/db.js")
const connection = require("./config/config.js")
// Using hbs template engine

hbs.registerPartials(__dirname + '/views/partials');

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")
app.use('/assets', express.static(__dirname + '/public'));

app.use(fileUpload());

app.set('view engine', 'hbs');
// connecting route to database
app.use(function(req, res, next) {
  req.con = con
  req.connection = connection
  next()
})


// Handle 404 - Keep this as a last route
// app.use(function (req, res, next) {
//   res.status(404);
//     res.render("404", {
//       title: '404: File Not Found',
//     })
// });

// app.use(function (req, res, next) {
//   res.status(500);
//   res.render("500", {
//     title: '500: Internal Server Error',
//   })
// });


// parsing body request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// include router
const biodataRouter = require("./routes/biodataRouter")
const dashboardRouter = require("./routes/dashboardRouter")
const homeRouter = require("./routes/homeRouter")
const loginRouter = require("./routes/loginRouter")
const informasiRouter = require("./routes/informasiRouter")

// Admin
const tiketRouter = require("./routes/Admin/tiketRouter")
const Master_tiketRouter = require("./routes/Admin/Master/Master_tiketRouter")
const Master_artikelRouter = require("./routes/Admin/Master/Master_artikelRouter")
const Master_hastagRouter = require("./routes/Admin/Master/Master_hastagRouter")
const konfigurasiRouter = require("./routes/Admin/konfigurasiRouter")
// routing

// Admin
app.use("/master_tiket", Master_tiketRouter)
app.use("/master_artikel", Master_artikelRouter)
app.use("/master_hastag", Master_hastagRouter)
app.use("/tiket", tiketRouter)
app.use("/konfigurasi", konfigurasiRouter)
// frontend
app.use("/biodata", biodataRouter)
app.use("/admin", dashboardRouter)
app.use("/", homeRouter)
app.use("/login", loginRouter)
app.use("/informasi", informasiRouter)

// starting server
app.listen(3001, function() {
  console.log("server listening on port 3001")
})
