/*
  Warnings:

  - Added the required column `dateReleased` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "accessToken" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Issue" ADD COLUMN     "dateReleased" TIMESTAMP(3) NOT NULL;
