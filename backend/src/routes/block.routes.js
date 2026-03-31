import express from "express";
import { blockUser } from "../controllers/block.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/:userId", protect, blockUser);

export default router;