/*
  Warnings:

  - You are about to drop the `DefaultTransactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DefaultTransactions" DROP CONSTRAINT "DefaultTransactions_transaction_id_fkey";

-- DropForeignKey
ALTER TABLE "DefaultTransactions" DROP CONSTRAINT "DefaultTransactions_user_id_fkey";

-- DropTable
DROP TABLE "DefaultTransactions";

-- CreateTable
CREATE TABLE "default_transactions" (
    "user_id" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,

    CONSTRAINT "default_transactions_pkey" PRIMARY KEY ("user_id","transaction_id")
);

-- AddForeignKey
ALTER TABLE "default_transactions" ADD CONSTRAINT "default_transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "default_transactions" ADD CONSTRAINT "default_transactions_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transactions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
