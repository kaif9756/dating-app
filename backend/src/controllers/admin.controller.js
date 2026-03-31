import prisma from "../config/prisma.js";

export const approveKyc = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await prisma.user.update({
      where: { id: userId },
      data: { kycStatus: "approved" },
    });

    res.json({
      message: "KYC approved",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Approval failed" });
  }
};

export const rejectKyc = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await prisma.user.update({
      where: { id: userId },
      data: { kycStatus: "rejected" },
    });

    res.json({
      message: "KYC rejected",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Rejection failed" });
  }
};