import { Entity } from '@loopback/repository';
import { Product } from './product.model';
export declare class Category extends Entity {
    id: number;
    fullname: string;
    email: string;
    password: string;
    products: Product[];
    constructor(data?: Partial<Category>);
}
