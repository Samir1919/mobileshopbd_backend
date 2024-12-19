const path = require('path');

exports.adminPage = (req, res) => {
  res.render("backend/adminIndex", {
    layout: path.join(__dirname, "../layouts/dashboard"),
    navigation: true,
    footer: true,
  });
};