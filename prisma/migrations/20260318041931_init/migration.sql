-- CreateTable
CREATE TABLE "game" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL,

    CONSTRAINT "game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ad" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "yearsPlaying" INTEGER NOT NULL,
    "discord" TEXT NOT NULL,
    "weekDays" TEXT NOT NULL,
    "hourStart" INTEGER NOT NULL,
    "hourEnd" INTEGER NOT NULL,
    "useVoiceChannel" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ad_gameId_idx" ON "ad"("gameId");

-- AddForeignKey
ALTER TABLE "ad" ADD CONSTRAINT "ad_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
