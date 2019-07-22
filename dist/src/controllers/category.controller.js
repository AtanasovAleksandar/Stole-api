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
let CategoryController = class CategoryController {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async create(category) {
        return await this.categoryRepository.create(category);
    }
    async count(where) {
        return await this.categoryRepository.count(where);
    }
    async find(filter) {
        return await this.categoryRepository.find(filter);
    }
    async updateAll(category, where) {
        return await this.categoryRepository.updateAll(category, where);
    }
    async findById(id) {
        return await this.categoryRepository.findById(id);
    }
    async updateById(id, category) {
        await this.categoryRepository.updateById(id, category);
    }
    async replaceById(id, category) {
        await this.categoryRepository.replaceById(id, category);
    }
    async deleteById(id) {
        await this.categoryRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/categories', {
        responses: {
            '200': {
                description: 'Category model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Category } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Category]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
__decorate([
    rest_1.get('/categories/count', {
        responses: {
            '200': {
                description: 'Category model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Category))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "count", null);
__decorate([
    rest_1.get('/categories', {
        responses: {
            '200': {
                description: 'Array of Category model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Category } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Category))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "find", null);
__decorate([
    rest_1.patch('/categories', {
        responses: {
            '200': {
                description: 'Category PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Category))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Category, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/categories/{id}', {
        responses: {
            '200': {
                description: 'Category model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Category } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findById", null);
__decorate([
    rest_1.patch('/categories/{id}', {
        responses: {
            '204': {
                description: 'Category PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Category]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "updateById", null);
__decorate([
    rest_1.put('/categories/{id}', {
        responses: {
            '204': {
                description: 'Category PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Category]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/categories/{id}', {
        responses: {
            '204': {
                description: 'Category DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteById", null);
CategoryController = __decorate([
    __param(0, repository_1.repository(repositories_1.CategoryRepository)),
    __metadata("design:paramtypes", [repositories_1.CategoryRepository])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map