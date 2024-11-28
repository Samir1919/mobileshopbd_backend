require('dotenv').config();

const express = require('express');
const expressLayouts = require("express-ejs-layouts");
const path = require('path');
// const rootDir = require('./utils/path');
const { Sequelize } = require('sequelize');
const config = require('./config/config');
const sequelize = new Sequelize(config.development);
// const sequelize = require('./utils/database');
// const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

// Set EJS as the view engine
// Set Templating Engine
app
  .use(expressLayouts)
  .set("view engine", "ejs")
  .set("views", path.join(__dirname, "/views"));

// Serve static files
app.use(express.static(path.join(__dirname, "/static")));

// maybe for frontend
// const cors = require('cors');
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Sync the database
sequelize.sync()
    .then(() => {
        console.log('Database synced successfully');
    })
    .catch(error => console.error('Error syncing database:', error));

app.get("/", (req, res) => {
  res.render("index", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: true,
  });
});

// otp route
app.use('/otp', require('./routes/otpRoute'));

// user route
app.use('/user', require('./routes/userRoute'));
// Brand route
// app.use('/brand/', require('./routes/brandRoute'));

// Category route
// app.use('/category/', require('./routes/categoryRoute'));
// Product route
// app.use('/product/', require('./routes/productRoute'));



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});