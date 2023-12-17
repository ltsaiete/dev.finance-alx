/*
  Warnings:

  - You are about to drop the column `is_default` on the `transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "is_default";

-- CreateTable
CREATE TABLE "DefaultTransactions" (
    "user_id" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,

    CONSTRAINT "DefaultTransactions_pkey" PRIMARY KEY ("user_id","transaction_id")
);

-- AddForeignKey
ALTER TABLE "DefaultTransactions" ADD CONSTRAINT "DefaultTransactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefaultTransactions" ADD CONSTRAINT "DefaultTransactions_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transactions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
