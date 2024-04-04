import db from "../config/dbConfig.js";

const loginUserDb = async (username) => {
  console.log(username);
  const result = await db.query("SELECT * FROM users WHERE email = $1", [
    username,
  ]);
  console.log(result);
  return result;
};

export default loginUserDb;
