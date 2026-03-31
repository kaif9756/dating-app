import express from "express";
import { approveKyc, rejectKyc } from "../controllers/admin.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/admin.middleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/admin/approve/{userId}:
 *   patch:
 *     summary: Approve KYC
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: KYC approved
 */

router.patch("/approve/:userId", protect, isAdmin, approveKyc);
router.patch("/reject/:userId", protect, isAdmin, rejectKyc);

export default router;