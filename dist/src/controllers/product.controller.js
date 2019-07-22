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
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductController = class ProductController {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(product) {
        return await this.productRepository.create(product);
    }
    async count(where) {
        return await this.productRepository.count(where);
    }
    async find(filter) {
        return await this.productRepository.find(filter);
    }
    async updateAll(product, where) {
        return await this.productRepository.updateAll(product, where);
    }
    async findById(id) {
        return await this.productRepository.findById(id);
    }
    async updateById(id, product) {
        await this.productRepository.updateById(id, product);
    }
    async replaceById(id, product) {
        await this.productRepository.replaceById(id, product);
    }
    async deleteById(id) {
        await this.productRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/products', {
        responses: {
            '200': {
                description: 'Product model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Product } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Product]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    rest_1.get('/products/count', {
        responses: {
            '200': {
                description: 'Product model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Product))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "count", null);
__decorate([
    rest_1.get('/products', {
        responses: {
            '200': {
                description: 'Array of Product model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Product } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Product))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "find", null);
__decorate([
    rest_1.patch('/products', {
        responses: {
            '200': {
                description: 'Product PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Product))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Product, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/products/{id}', {
        responses: {
            '200': {
                description: 'Product model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Product } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findById", null);
__decorate([
    rest_1.patch('/products/{id}', {
        responses: {
            '204': {
                description: 'Product PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Product]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateById", null);
__decorate([
    rest_1.put('/products/{id}', {
        responses: {
            '204': {
                description: 'Product PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Product]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/products/{id}', {
        responses: {
            '204': {
                description: 'Product DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteById", null);
ProductController = __decorate([
    __param(0, repository_1.repository(repositories_1.ProductRepository)),
    __metadata("design:paramtypes", [repositories_1.ProductRepository])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map