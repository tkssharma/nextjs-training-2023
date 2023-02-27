-- CreateTable
CREATE TABLE "Votes" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "voteId" INTEGER NOT NULL,

    CONSTRAINT "Votes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pokemons" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "spriteUrl" TEXT NOT NULL,

    CONSTRAINT "Pokemons_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Votes" ADD CONSTRAINT "Votes_voteId_fkey" FOREIGN KEY ("voteId") REFERENCES "Pokemons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
