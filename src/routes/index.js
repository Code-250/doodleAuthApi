const express = require("express");
const passport = require("passport");
const userLogin = require("../controller/user");
const ProfileController = require("../controller/profile");
require("../middleware/auth");

// const Routers = express().routes;
const app = express();
app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with google</a>');
});

app.post("/complete-profile", ProfileController.completeProfile);

app.get("/users", userLogin.getAllUsers);
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);

app.get("/auth/failure", (req, res) => {
  res.send("something went wrong....");
});

app.get("/protected", userLogin.userGoogleLogin);
