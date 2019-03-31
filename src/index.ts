import { prismaObjectType, makePrismaSchema } from 'nexus-prisma'
import { GraphQLServer } from 'graphql-yoga'
import { idArg } from 'nexus'
import * as path from 'path'
import { prisma } from './generated/prisma'
import datamodelInfo from './generated/nexus-prisma'

// Expose the full "Query" building block
const Query = prismaObjectType({ 
  name: 'Query',
   // Expose all generated `Todo`-queries
  definition: t => t.prismaFields(['*'])
})

const Mutation = prismaObjectType({ 
  name: 'Mutation',
  definition: t => {
    t.prismaFields(['createTodo'])
    t.field('complete', {
      type: 'Todo',
      args: { id: idArg() },
      nullable: true,
      resolve: (_, { id }, ctx) => (
        ctx.prisma.updateTodo({
          where: { id },
          data: { done: true }
        })
      )
    })
  }
})

const schema = makePrismaSchema({
  types: [Query, Mutation],
  prisma: {
    datamodelInfo,
    client: prisma,
  },
  outputs: {
    schema: path.join(__dirname, './generated/nexus/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus/nexus.ts'),
  },
})

const server = new GraphQLServer({
  schema,
  context: { prisma }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
