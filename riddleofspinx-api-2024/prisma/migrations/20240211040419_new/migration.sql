/*
  Warnings:

  - Made the column `image` on table `QNA` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `set_number` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QNA" ALTER COLUMN "image" SET NOT NULL;

-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "set_number" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_kid_fkey" FOREIGN KEY ("kid") REFERENCES "User"("kid") ON DELETE SET NULL ON UPDATE CASCADE;
