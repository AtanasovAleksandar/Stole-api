import {
  Entity,
  model,
  property,
  belongsTo,
  hasMany,
} from '@loopback/repository';
import { Product } from './product.model';

@model()
export class Category extends Entity {
  @property({
    type: 'number',
  })
  id: number;

  @property({
    type: 'string',
  })
  fullname: string;

  @property({
    type: 'string',
  })
  email: string;

  @property({
    type: 'string',
  })
  password: string;
  @hasMany(() => Product)
  products: Product[];

  constructor(data?: Partial<Category>) {
    super(data);
  }
}
