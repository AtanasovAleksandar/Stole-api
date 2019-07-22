import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './in-memory-source.datasource.json';

export class InMemorySourceDataSource extends juggler.DataSource {
  static dataSourceName = 'InMemorySource';

  constructor(
    @inject('datasources.config.InMemorySource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
