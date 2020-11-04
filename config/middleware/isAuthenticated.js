module.exports = function(req, res, next) {
    if (req.users) {
      return next();
    }
    return res.redirect("/login");
  };