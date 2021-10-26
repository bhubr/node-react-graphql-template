import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import DummyResolver from './dummy-resolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [DummyResolver]
  });
  const server = new ApolloServer({
    schema
  });

  const port = process.env.PORT || 5050;
  const { url } = await server.listen(port);
  console.log(`Listening, go to ${url}`);
}

bootstrap();
