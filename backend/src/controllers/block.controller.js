import prisma from "../config/prisma.js";

export const blockUser = async (req, res) => {
  try {
    const blockerId = req.user.userId;
    const { userId } = req.params;

    if (blockerId === userId) {
      return res.status(400).json({
        message: "You cannot block yourself",
      });
    }

    const existing = await prisma.block.findFirst({
      where: {
        blockerId,
        blockedId: userId,
      },
    });

    if (existing) {
      return res.status(400).json({
        message: "User already blocked",
      });
    }

    await prisma.block.create({
      data: {
        blockerId,
        blockedId: userId,
      },
    });

    res.json({
      message: "User blocked successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Block failed",
    });
  }
};