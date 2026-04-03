import express from "express";
import { uploadPhoto } from "../controllers/photo.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import upload from "../config/multer.js";

const router = express.Router();

/**
 * @swagger
 * /media/upload-photo:
 *   post:
 *     summary: Upload user photo
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
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Photo uploaded
 */

router.post("/upload-photo", protect, upload.single("photo"), uploadPhoto);

export default router;