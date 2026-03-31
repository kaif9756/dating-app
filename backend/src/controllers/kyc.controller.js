import prisma from "../config/prisma.js";

export const uploadKyc = async (req, res) => {
  try {
    const userId = req.user.userId;

    if (!req.file) {
      return res.status(400).json({
        message: "No video uploaded",
      });
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        kycVideoUrl: req.file.path,
        kycStatus: "pending",
      },
    });

    res.json({
      message: "KYC uploaded, waiting for approval",
      kycStatus: user.kycStatus,
    });
  } catch (error) {
    res.status(500).json({
      message: "KYC upload failed",
    });
  }
};