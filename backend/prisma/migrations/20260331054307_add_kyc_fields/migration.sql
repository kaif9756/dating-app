-- AlterTable
ALTER TABLE "User" ADD COLUMN     "kycStatus" TEXT NOT NULL DEFAULT 'pending',
ADD COLUMN     "kycVideoUrl" TEXT;
