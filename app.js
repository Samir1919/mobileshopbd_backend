require('dotenv').config();

const express = require('express');
const expressLayouts = require("express-ejs-layouts");
const path = require('path');
const { Sequelize } = require('sequelize');
const config = require('./config/database');
const sequelize = new Sequelize(config.development);
const session = require('express-session');

const Category = require('./models/Category');
const Product = require('./models/Product');

const app = express();
const port = process.env.PORT || 8000;

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
app.use(express.static(path.join(__dirname, "/uploads")));


// maybe for frontend
// const cors = require('cors');
// app.use(cors({ origin: 'http://localhost:5000', credentials: true }));
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Session configuration (adjust settings as needed)
app.use(session({
  secret: process.env.SESSION_KEY || 'your_secret_key', // Replace with a strong, unique secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true for HTTPS connections
}));

// Route
app.get("/", (req, res) => {
  res.render("pages/pricing", {
    layout: path.join(__dirname, "/layouts/main"),
    navigation: true,
    footer: true,
  });
});

// login and registry route
app.use('/login', require('./routes/loginRoute'));

// otp route
app.use('/otp', require('./routes/otpRoute'));

// user route
app.use('/user', require('./routes/userRoute'));

app.use('/admin', require('./routes/adminRoute'));
app.use('/category', require('./routes/categoryRoute'));
app.use('/product', require('./routes/productRoute'));

// create table
// const MyModel = require('./models/Product');
// MyModel.sync({ force: true }) // Forcefully sync to recreate the table
//   .then(() => {
//     console.log('Table created successfully!');
//   })
//   .catch(err => {
//     console.error('Error creating table:', err);
//   });

// orm
Category.hasMany(Product);
Product.belongsTo(Category);

// Sync the database
sequelize.sync()
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch(error => console.error('Error syncing database:', error));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});