import { juggler } from '@loopback/repository';
export declare class PostgresqlDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
