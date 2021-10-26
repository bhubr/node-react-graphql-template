import { Query, Mutation, Arg, Resolver, Int } from 'type-graphql';
import { getConnection } from 'typeorm';
import { Activity } from '../entity/Activity';

@Resolver(Activity)
export default class ActivityResolver {
  @Query(returns => [Activity])
  async getActivities() {
    const connection = await getConnection();
    const dummies = await connection.manager.find(Activity);
    return dummies;
  }

  @Query(returns => Activity)
  async getActivity(@Arg('id', () => Int) id: number) {
    const connection = await getConnection();
    const activities = await connection.manager.find(Activity);
    const d = activities.find(a => a.id === id);
    console.log('found', id, d);
    return d;
  }

  @Mutation(returns => Activity)
  async createActivity(
    @Arg('title') title: string,
    @Arg('description') description?: string
  ) {
    const a = new Activity();
    a.title = title;
    a.description = description;
    const connection = await getConnection();
    await connection.manager.save(a);
    return a;
  }
}