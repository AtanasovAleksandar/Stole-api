import { juggler } from '@loopback/repository';
export declare class InMemorySourceDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
