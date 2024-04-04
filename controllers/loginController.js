import passport from "passport";

export const loginUser = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/",
  failureMessage: "Incorrect Username or Password",
});

export const logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
};
