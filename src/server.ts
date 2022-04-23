import 'reflect-metadata'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { buildSchema } from 'type-graphql'
import { PostalCodeResolver } from './resolvers/PostalCodeResolver'

const port = 4000

const main = async () => {
  const app = express()
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostalCodeResolver],
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({ app: app as any })

  app.listen(port, () => console.log(`'Server is running: ${port}`))
}

main().catch(err => console.log(err))
