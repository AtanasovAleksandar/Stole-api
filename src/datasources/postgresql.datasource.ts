import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './postgresql.datasource.json';

export class PostgresqlDataSource extends juggler.DataSource {
  static dataSourceName = 'postgresql';

  constructor(
    @inject('datasources.config.postgresql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
