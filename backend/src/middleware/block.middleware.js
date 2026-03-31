import prisma from "../config/prisma.js";

export const checkBlocked = async (req, res, next) => {
  try {
    const currentUserId = req.user.userId;
    const targetUserId = req.params.userId;

    const block = await prisma.block.findFirst({
      where: {
        OR: [
          {
            blockerId: currentUserId,
            blockedId: targetUserId,
          },
          {
            blockerId: targetUserId,
            blockedId: currentUserId,
          },
        ],
      },
    });

    if (block) {
      return res.status(403).json({
        message: "Action not allowed (user blocked)",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      message: "Block check failed",
    });
  }
};