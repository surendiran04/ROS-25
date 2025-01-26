-- CreateTable
CREATE TABLE "Checks" (
    "restriction" BOOLEAN NOT NULL,
    "value" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Checks_restriction_key" ON "Checks"("restriction");
