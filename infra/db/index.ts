import knex, { Knex } from 'knex';
import { Model } from 'objection';

export const initializeDatabase = (client: string, connection: string, searchPath: Array<string>): void => {
  const knexConnection: Knex = knex({
    client,
    connection,
    searchPath,
  });

  Model.knex(knexConnection);
};
