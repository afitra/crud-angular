var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var cors = require("cors")
require("dotenv").config()
const session = require("express-session")
const mongoose = require("mongoose")
var indexRouter = require("./routes/index")
var userRouter = require("./routes/users")
var adminRouter = require("./routes/admin")

var app = express()

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
)

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "jade")

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/admin", adminRouter)
app.use("/user", userRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

var dbUrl = null
if (process.env.ONLINE_MONGO_DB == "true") {
  dbUrl = process.env.MONGO_ONLINE_ON // if mongo db online
} else {
  dbUrl = process.env.MONGO_ONLINE_OFF // if mongo db offline/local
}

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
  // retry to connect for 60 times
})

mongoose.connection.on("error", (err) => {
  logError(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

// const http = require("http")

// const hostname = "127.0.0.1"
// const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader("Content-Type", "text/plain")
//   res.end("Hello World")
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })

module.exports = app
