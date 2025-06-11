import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatDto } from './dto/cat.dto';
import { Repository } from 'typeorm';
import { Cat } from './entities/cat.entity';
import { CatInputDto } from './dto/cat-input';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>) { }

  create(createCatDto: CreateCatDto): Promise<CatDto> {
    const cat = this.catRepository.create(createCatDto);
    return this.catRepository.save(cat);
  }

  findAll(catInputDto: CatInputDto): Promise<CatDto[]> {
    const queryBuilder = this.catRepository.createQueryBuilder('cat');

    if (catInputDto.query) {
      queryBuilder.where('cat.name LIKE :query', { query: `%${catInputDto.query}%` });
    }

    if (catInputDto.age !== undefined) {
      queryBuilder.andWhere('cat.age = :age', { age: catInputDto.age });
    }

    if (catInputDto.isActive !== undefined) {
      queryBuilder.andWhere('cat.isActive = :isActive', { isActive: catInputDto.isActive });
    }

    return queryBuilder.getMany();
  }

  findOne(id: number): Promise<CatDto> {
    return this.catRepository.findOneBy({ id })
      .then(cat => {
        if (!cat) {
          throw new Error(`Cat with id ${id} not found`);
        }
        return cat;
      });
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return this.catRepository.findOneBy({ id })
      .then(cat => {
        if (!cat) {
          throw new Error(`Cat with id ${id} not found`);
        }
        Object.assign(cat, updateCatDto);
        return this.catRepository.save(cat);
      });
  }

  remove(id: number): void {
    this.catRepository.findOneBy({ id })
      .then(cat => {
        if (!cat) {
          throw new Error(`Cat with id ${id} not found`);
        }
        return this.catRepository.remove(cat);
      });
  }
}
