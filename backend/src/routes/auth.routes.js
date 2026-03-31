import express from "express";
import { googleLogin } from "../controllers/auth.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/auth/google:
 *   post:
 *     summary: Google login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idToken
 *             properties:
 *               idToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */

router.post("/google", googleLogin);

export default router;