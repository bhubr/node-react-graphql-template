import { Query, Mutation, Arg, Resolver, Int } from 'type-graphql';
import { getConnection } from 'typeorm';
import { Dummy } from './entity/Dummy';

@Resolver(Dummy)
export default class DummyResolver {
  @Query(returns => [Dummy])
  async getDummies() {
    const connection = await getConnection();
    const dummies = await connection.manager.find(Dummy);
    return dummies;
  }

  @Query(returns => Dummy)
  async getDummy(@Arg('id', () => Int) id: number) {
    const connection = await getConnection();
    const dummies = await connection.manager.find(Dummy);
    const d = dummies.find(d => d.id === id);
    console.log('found', id, d);
    return d;
  }

  @Mutation(returns => Dummy)
  async createDummy(@Arg('name') name: string) {
    const d = new Dummy();
    d.name = name;
    const connection = await getConnection();
    await connection.manager.save(d);
    // dummies.push(d);
    // console.log(dummies);
    return d;
  }
}