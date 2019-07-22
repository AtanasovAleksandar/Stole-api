"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
// import { Category } from '../models/category.model';
// import { CategoryRepository } from './category.repository';
let ProductRepository = class ProductRepository extends repository_1.DefaultCrudRepository {
    // public readonly categories: HasManyRepositoryFactory<
    //   Category,
    //   typeof Product.prototype.id
    // >;
    constructor(dataSource) {
        super(models_1.Product, dataSource);
        // this.categories = this.createHasManyRepositoryFactoryFor(
        //   'categories',
        //   getCategoryRepository
        // );
    }
};
ProductRepository = __decorate([
    __param(0, core_1.inject('datasources.InMemorySource')),
    __metadata("design:paramtypes", [datasources_1.InMemorySourceDataSource])
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map