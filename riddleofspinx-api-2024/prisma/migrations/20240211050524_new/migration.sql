/*
  Warnings:

  - You are about to drop the column `score` on the `Score` table. All the data in the column will be lost.
  - You are about to drop the column `time_score` on the `Score` table. All the data in the column will be lost.
  - Added the required column `scorer1` to the `Score` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scorer2` to the `Score` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time_scorer1` to the `Score` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time_scorer2` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Score" DROP COLUMN "score",
DROP COLUMN "time_score",
ADD COLUMN     "scorer1" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "scorer2" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "time_scorer1" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "time_scorer2" DOUBLE PRECISION NOT NULL;
