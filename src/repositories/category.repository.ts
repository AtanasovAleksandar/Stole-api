import { DefaultCrudRepository, juggler, BelongsToAccessor, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Category } from '../models';
import { InMemorySourceDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { Product } from '../models/product.model';
import { ProductRepository } from './product.repository';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.id
  > {

  public readonly products: HasManyRepositoryFactory<
    Product,
    typeof Category.prototype.id
  >;

  // public readonly parentCategory: BelongsToAccessor<
  //   Category,
  //   typeof Category.prototype.id
  // >;

  constructor(
    @inject('datasources.InMemorySource') dataSource: InMemorySourceDataSource,
    @repository.getter('ProductRepository')
    getProductRepository: Getter<ProductRepository>,
  ) {
    super(Category, dataSource);

    this.products = this.createHasManyRepositoryFactoryFor('products', getProductRepository);

    // this.parentCategory = this.createBelongsToAccessorFor('parentCategory', this);
  }
}
