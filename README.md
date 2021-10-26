# Node/React/TS/GraphQL template

* React
* Apollo Server + TypeGraphQL + TypeORM

## Word of caution

**Be careful when initializing TypeORM**. Just make sure you commit every single thing before you ever run `npx typeorm init`, because it won't bother overwriting:

* `package.json`,
* `tsconfig.json`,
* `src/index.ts`

In my case, it simply f*cked up the TS config, making Apollo Server + TypeGraphQL unable to start.

## Links

* [how to specify ormconfig.ts for typeorm?](https://stackoverflow.com/q/52187328/)