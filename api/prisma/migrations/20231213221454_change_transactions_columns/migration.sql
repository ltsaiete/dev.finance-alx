/*
  Warnings:

  - You are about to drop the column `completed` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `default` on the `transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "completed",
DROP COLUMN "default",
ADD COLUMN     "is_completed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_default" BOOLEAN NOT NULL DEFAULT false;
