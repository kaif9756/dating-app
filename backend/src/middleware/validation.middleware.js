import prisma from "../config/prisma.js";

export const requireValidUser = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        photos: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // 1. Profile check
    if (!user.isProfileComplete) {
      return res.status(403).json({
        message: "Complete your profile",
      });
    }

    // 2. Photo check
    if (!user.photos || user.photos.length === 0) {
      return res.status(403).json({
        message: "Upload at least one photo",
      });
    }

    // 3. KYC check
    if (user.kycStatus !== "approved") {
      return res.status(403).json({
        message: "Upload KYC first",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      message: "Validation failed",
    });
  }
};