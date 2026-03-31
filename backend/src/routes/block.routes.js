import express from "express";
import { blockUser } from "../controllers/block.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/block/{userId}:
 *   post:
 *     summary: Block user
 *     tags: [Block]
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
 *         description: User blocked
 */
router.post("/:userId", protect, blockUser);

router.post("/:userId", protect, blockUser);

export default router;