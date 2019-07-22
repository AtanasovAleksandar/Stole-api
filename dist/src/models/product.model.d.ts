import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    id?: number;
    email: string;
    password: string;
    model: string;
    imageUrl: string;
    location: string;
    startDate: string;
    endDate: string;
    year: string;
    description: string;
    km: string;
    price: number;
    fullname: string;
    constructor(data?: Partial<Product>);
}
