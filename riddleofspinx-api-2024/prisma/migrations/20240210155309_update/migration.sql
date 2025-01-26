-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "kid" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT,
    "character" TEXT,
    "level1" TEXT,
    "level2" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QNA" (
    "question_number" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "choices" TEXT[],
    "answers" TEXT NOT NULL,
    "image" TEXT,
    "type" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "set" INTEGER NOT NULL,

    CONSTRAINT "QNA_pkey" PRIMARY KEY ("question_number")
);

-- CreateTable
CREATE TABLE "Score" (
    "id" SERIAL NOT NULL,
    "kid" TEXT,
    "set_number" INTEGER NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "time_score" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_kid_key" ON "User"("kid");

-- CreateIndex
CREATE UNIQUE INDEX "Score_kid_key" ON "Score"("kid");
