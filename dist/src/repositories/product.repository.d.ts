import { DefaultCrudRepository } from '@loopback/repository';
import { Product } from '../models';
import { InMemorySourceDataSource } from '../datasources';
export declare class ProductRepository extends DefaultCrudRepository<Product, typeof Product.prototype.id> {
    constructor(dataSource: InMemorySourceDataSource);
}
