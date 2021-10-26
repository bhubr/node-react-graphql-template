import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import DummyResolver from './dummy-resolver';
import ActivityResolver from './resolver/activity';
import { createConnection } from 'typeorm';

async function bootstrap() {
  try {
    // Create TypeORM connection
    const connection = await createConnection();

    // Build GraphQL schema from resolve
    const schema = await buildSchema({
      resolvers: [DummyResolver, ActivityResolver],
    });
    // Instantiate ApolloServer with schema
    const server = new ApolloServer({
      schema,
    });

    // Make ApolloServer instance listen
    const port = process.env.PORT || 5050;
    const { url } = await server.listen(port);
    console.log(`Listening, go to ${url}`);
  } catch (err) {
    console.error('FATAL ERROR', err);
    process.exit(1);
  }
}

bootstrap();
