import { prisma } from './generated/prisma-client'

async function main() {
  const users = await Promise.all([
      prisma.createTodo({
      title: 'Buy Groceries'
    }),
    prisma.createTodo({
      title: 'Write Letters'
    })
  ])

  console.log(`Created ${users.length} users`)
}

main().catch(e => console.error(e))
