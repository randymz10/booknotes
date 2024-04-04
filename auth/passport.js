import loginUserDb from "../models/Login.js";
import { Strategy } from "passport-local";
import bcrypt from "bcrypt";

export const loginCheck = (passport) => {
  passport.use(
    "local",
    new Strategy(async function verify(username, password, cb) {
      try {
        const result = await loginUserDb(username);
        console.log(result);
        if (result.rows.length > 0) {
          const user = result.rows[0];
          const hashedPassword = user.password;
          bcrypt.compare(password, hashedPassword, (err, valid) => {
            if (err) {
              console.error("Error comparing passwords: ", err);
              return cb(err);
            } else {
              if (valid) {
                return cb(null, user);
              } else {
                return cb(null, false);
              }
            }
          });
        } else {
          return cb("User not found");
        }
      } catch (err) {
        console.error(err);
      }
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user);
  });

  passport.deserializeUser((user, cb) => {
    cb(null, user);
  });
};
