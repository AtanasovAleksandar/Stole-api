import { DefaultCrudRepository } from '@loopback/repository';
import { Product } from '../models';
import { InMemorySourceDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
// import { Category } from '../models/category.model';
// import { CategoryRepository } from './category.repository';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id
  > {

  // public readonly categories: HasManyRepositoryFactory<
  //   Category,
  //   typeof Product.prototype.id
  // >;

  constructor(
    @inject('datasources.InMemorySource') dataSource: InMemorySourceDataSource,
    // @repository.getter('CategoryRepository')
    // getCategoryRepository: Getter<CategoryRepository>,
  ) {
    super(Product, dataSource);

    // this.categories = this.createHasManyRepositoryFactoryFor(
    //   'categories',
    //   getCategoryRepository
    // );
  }
}
