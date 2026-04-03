import express from "express";
import { uploadKycController } from "../controllers/kyc.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import uploadKycMiddleware from "../config/multerKyc.js";

const router = express.Router();

/**
 * @swagger
 * /media/upload-kyc:
 *   post:
 *     summary: Upload KYC video
 *     tags: [Media]
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
router.post("/upload-kyc", protect, uploadKycMiddleware.single("video"), uploadKycController);

export default router;