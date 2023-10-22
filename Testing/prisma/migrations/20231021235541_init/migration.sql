/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `transactions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "transactions_id_key" ON "transactions"("id");
