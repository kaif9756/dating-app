import express from "express";
import { uploadKyc } from "../controllers/kyc.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import uploadKycMiddleware from "../config/multerKyc.js";

const router = express.Router();

/**
 * @swagger
 * /api/kyc/upload:
 *   post:
 *     summary: Upload KYC video
 *     tags: [KYC]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               video:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: KYC uploaded
 */


router.post("/upload", protect, uploadKycMiddleware.single("video"), uploadKyc);

export default router;