import express from "express";
import session from "express-session";
import passport from "passport";
import bodyParser from "body-parser";
import userLogin from "./controller/user";
import ProfileController from "./controller/profile";
import "./middleware/auth";

function isLoggedIn(req, res, next) {
  // eslint-disable-next-line no-unused-expressions
  req.user ? next() : res.sendStatus(401);
}

const app = express();
app.use(session({ secret: process.env.SECRET }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser());
// app.use("/api/v1", Router);

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

app.get("/protected", isLoggedIn, userLogin.userGoogleLogin);
app.listen(8000, () => console.log("app is listening on port 8000"));
