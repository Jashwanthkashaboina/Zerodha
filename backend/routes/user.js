const User = require("../models/user");
const express = require("express");
const router = express.Router({ mergeParams: true });
const passport = require("passport");




// post req and it will be async because we are making changes in db
// because it is post req we get data from req.body
router.post("/signup", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);

    //Auto login after signup
    req.login(registeredUser, async (err) => {
      if (err) return next(err);
      registeredUser.lastLogin = new Date();
      await registeredUser.save();
      return res.status(201).json({
        success: true,
        message: "Signup successful",
        user: {
          username: registeredUser.username,
          email: registeredUser.email,
          lastLogin: null,
        },
      });
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});



// login routes
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    req.logIn(user, async(err) => {
      if (err) return next(err);
      // Save last login time
      user.lastLogin = new Date();
      await user.save();
      return res.status(200).json({
        success: true,
        message: "Login successful",
        user: {
          username: user.username,
          email: user.email,
          lastLogin: user.lastLogin,
        },
      });
    });
  })(req, res, next);
});


router.post("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  });
});


router.get("/me", (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({
      loggedIn: true,
      user: {
        username: req.user.username,
        email: req.user.email,
        lastLogin: null,
      },
    });
  }

  res.status(200).json({
    loggedIn: false,
  });
});



module.exports = router;