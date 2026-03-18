import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.ad.deleteMany()
  await prisma.game.deleteMany()

  const games = await Promise.all([
    prisma.game.create({
      data: {
        title: 'League of Legends',
        bannerUrl: '/game-1.png',
      },
    }),
    prisma.game.create({
      data: {
        title: 'Dota 2',
        bannerUrl: '/game-2.png',
      },
    }),
    prisma.game.create({
      data: {
        title: 'Counter-Strike',
        bannerUrl: '/game-3.png',
      },
    }),
    prisma.game.create({
      data: {
        title: 'Apex Legends',
        bannerUrl: '/game-4.png',
      },
    }),
    prisma.game.create({
      data: {
        title: 'Fortinite',
        bannerUrl: '/game-5.png',
      },
    }),
      prisma.game.create({
      data: {
        title: 'World Of Warcraft Shadowlands',
        bannerUrl: '/game-6.png',
      },
    }),
  ])

  await prisma.ad.createMany({
    data: [
      {
        gameId: games[0].id,
        name: 'Gustavo',
        yearsPlaying: 5,
        discord: 'gustavoferreiradasilva',
        weekDays: '1,7',
        hourStart: 18,
        hourEnd: 22,
        useVoiceChannel: true,
      },
      {
        gameId: games[1].id,
        name: 'Carlos',
        yearsPlaying: 3,
        discord: 'carlos#5678',
        weekDays: '2,4',
        hourStart: 20,
        hourEnd: 23,
        useVoiceChannel: true,
      },
      {
        gameId: games[2].id,
        name: 'Ana',
        yearsPlaying: 2,
        discord: 'ana#9999',
        weekDays: '0,6',
        hourStart: 14,
        hourEnd: 18,
        useVoiceChannel: false,
      },
      {
        gameId: games[0].id,
        name: 'Lucas',
        yearsPlaying: 7,
        discord: 'lucas#7777',
        weekDays: '1,2,3,4,5',
        hourStart: 19,
        hourEnd: 23,
        useVoiceChannel: true,
      },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })