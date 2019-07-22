import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Category } from '../models';
import { CategoryRepository } from '../repositories';

export class CategoryController {
  constructor(
    @repository(CategoryRepository)
    public categoryRepository: CategoryRepository,
  ) { }

  @post('/categories', {
    responses: {
      '200': {
        description: 'Category model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Category } } },
      },
    },
  })
  async create(@requestBody() category: Category): Promise<Category> {
    return await this.categoryRepository.create(category);
  }

  @get('/categories/count', {
    responses: {
      '200': {
        description: 'Category model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Category)) where?: Where,
  ): Promise<Count> {
    return await this.categoryRepository.count(where);
  }

  @get('/categories', {
    responses: {
      '200': {
        description: 'Array of Category model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Category } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Category)) filter?: Filter,
  ): Promise<Category[]> {
    return await this.categoryRepository.find(filter);
  }

  @patch('/categories', {
    responses: {
      '200': {
        description: 'Category PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() category: Category,
    @param.query.object('where', getWhereSchemaFor(Category)) where?: Where,
  ): Promise<Count> {
    return await this.categoryRepository.updateAll(category, where);
  }

  @get('/categories/{id}', {
    responses: {
      '200': {
        description: 'Category model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Category } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Category> {
    return await this.categoryRepository.findById(id);
  }

  @patch('/categories/{id}', {
    responses: {
      '204': {
        description: 'Category PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() category: Category,
  ): Promise<void> {
    await this.categoryRepository.updateById(id, category);
  }

  @put('/categories/{id}', {
    responses: {
      '204': {
        description: 'Category PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() category: Category,
  ): Promise<void> {
    await this.categoryRepository.replaceById(id, category);
  }

  @del('/categories/{id}', {
    responses: {
      '204': {
        description: 'Category DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.categoryRepository.deleteById(id);
  }
}
