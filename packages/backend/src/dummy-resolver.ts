import { Query, Mutation, Arg, Resolver, ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
class Dummy {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;
}

const dummies: Dummy[] = [];

@Resolver(Dummy)
export default class DummyResolver {
  @Query(returns => [Dummy])
  async getDummies() {
    return dummies;
  }

  @Query(returns => Dummy)
  async getDummy(@Arg('id') id: string) {
    const d = dummies.find(d => d.id === id);
    console.log('found', id, d);
    return d;
  }

  @Mutation(returns => Dummy)
  createDummy(@Arg('name') name: string) {
    const id = Date.now().toString(36);
    const d = new Dummy();
    d.id = id;
    d.name = name;
    dummies.push(d);
    console.log(dummies);
    return d;
  }
}