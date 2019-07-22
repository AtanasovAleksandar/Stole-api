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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Product = class Product extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true,
    }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Product.prototype, "email", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Product.prototype, "password", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Product.prototype, "model", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Product.prototype, "imageUrl", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Product.prototype, "location", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Product.prototype, "startDate", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Product.prototype, "endDate", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Product.prototype, "year", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Product.prototype, "km", void 0);
__decorate([
    repository_1.property({
        type: 'number'
    }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Product.prototype, "fullname", void 0);
Product = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Product);
exports.Product = Product;
//# sourceMappingURL=product.model.js.map