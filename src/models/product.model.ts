import { Entity, model, property, hasMany, belongsTo } from '@loopback/repository';
import { Category } from './category.model';

@model()
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  email: string;

  @property({
    type: 'string'
  })
  password: string;

  @property({
    type: 'string'
  })
  model: string;

  @property({
    type: 'string'
  })
  imageUrl: string;

  @property({
    type: 'string'
  })
  location: string;

  @property({
    type: 'string'
  })
  startDate: string;

  @property({
    type: 'string'
  })
  endDate: string;

  @property({
    type: 'string'
  })
  year: string;

  @property({
    type: 'string'
  })
  description: string;

  @property({
    type: 'string'
  })
  km: string;

  @property({
    type: 'number'
  })
  price: number;

  @property({
    type: 'string'
  })
  fullname: string;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}
