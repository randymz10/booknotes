import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import passport from "passport";
import bookRouter from "./routes/bookRoute.js";
import loginRouter from "./routes/loginRoute.js";
import { loginCheck } from "./auth/passport.js";

const app = express();
const port = process.env.PORT;
const API_URL = "https://covers.openlibrary.org/b/isbn/";

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

loginCheck(passport);
// Routes;
app.use("/", loginRouter);
app.use("/book", bookRouter);

app.get("/", (req, res) => {
  res.redirect("/book");
});

app.listen(port, console.log(`App running on http://localhost:${port}`));
