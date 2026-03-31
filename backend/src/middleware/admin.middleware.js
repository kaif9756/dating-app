import prisma from "../config/prisma.js";

export const isAdmin = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Admin access only",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Authorization failed" });
  }
};