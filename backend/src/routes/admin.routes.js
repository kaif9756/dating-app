import express from "express";
import { approveKyc, rejectKyc } from "../controllers/admin.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/admin.middleware.js";

const router = express.Router();

router.patch("/approve/:userId", protect, isAdmin, approveKyc);
router.patch("/reject/:userId", protect, isAdmin, rejectKyc);

export default router;