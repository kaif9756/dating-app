import express from "express";
import { uploadPhoto } from "../controllers/photo.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import upload from "../config/multer.js";

const router = express.Router();

/**
 * @swagger
 * /api/photo/upload:
 *   post:
 *     summary: Upload user photo
 *     tags: [Photo]
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

router.post("/upload", protect, upload.single("photo"), uploadPhoto);

export default router;