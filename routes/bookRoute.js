import { Router } from "express";
import {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook
} from "../controllers/bookController.js";

const router = Router();

router.get("/", getAllBooks);
router.post("/new", createBook);
router.post("/edit", updateBook);
router.post("/delete", deleteBook);

export default router;
