import pg from "pg";
import "dotenv/config";

const db = new pg.Pool({
  database: process.env.DB,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export default db;
