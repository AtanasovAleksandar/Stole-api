import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Category } from '../models';
import { InMemorySourceDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { Product } from '../models/product.model';
import { ProductRepository } from './product.repository';
export declare class CategoryRepository extends DefaultCrudRepository<Category, typeof Category.prototype.id> {
    readonly products: HasManyRepositoryFactory<Product, typeof Category.prototype.id>;
    constructor(dataSource: InMemorySourceDataSource, getProductRepository: Getter<ProductRepository>);
}
