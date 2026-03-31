import express from "express";
import { uploadKyc } from "../controllers/kyc.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import uploadKycMiddleware from "../config/multerKyc.js";

const router = express.Router();

router.post("/upload", protect, uploadKycMiddleware.single("video"), uploadKyc);

export default router;