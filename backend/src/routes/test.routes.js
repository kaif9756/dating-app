import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { requireValidUser } from "../middleware/validation.middleware.js";

const router = express.Router();

router.get("/feed", protect, requireValidUser, (req, res) => {
  res.json({ message: "Welcome to dating app..!" });
});

export default router;