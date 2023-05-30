const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
const conn = require('./db/conn')
const Tought = require('./models/Tought')
const User = require('./models/User')

const app = express()

// template engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");


// parse application/x-www-form-urlencoded
// receber resposta do body
app.use(
  express.urlencoded({
    extended: true
  })
)

// Session middleware
app.use(
  session({
    name: 'connect.sid',
    // O secret em si não deve ser facilmente analisado por um humano
    secret: '2X01CLxyIgo4Ho#1a]Zvmq#u{uA&Rt',
    // Força a sessão a ser salva de volta no armazenamento de sessão
    resave: false,
    // Sessão só será salva se não tiver sido modificada
    saveUninitialized: false,
    // Salvar a sessão no dir sessions
    store: new FileStore({
      logFn: function () { },
      path: require('path').join(require('os').tmpdir(), 'sessions')
    }),
    cookie: {
      secure: false,
      maxAge: 360000, // 1 dia
      expires: new Date(Date.now() + 360000),
      httpOnly: true
    }

  })
)

// flash messages
app.use(flash())

// public path
app.use(express.static('public'))

// set session to res
app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session
  }

  next()
})

app.use(express.json())

conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))