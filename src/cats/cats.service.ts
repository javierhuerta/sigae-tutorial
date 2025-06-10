import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatDto } from './dto/cat.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class CatsService {

  constructor() {}

  create(createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  findAll() {
    const cats: CatDto[] = [
      { id: 1, name: 'Whiskers', age: 2, breed: 'Siamese'},
      { id: 2, name: 'Mittens', age: 3, breed: 'Persian' },
      { id: 3, name: 'Shadow', age: 1, breed: 'la' },
    ];

    // Simulating a pagination response
    const pagination: PaginationDto<CatDto> = {
      totalItems: cats.length,
      totalPages: Math.ceil(cats.length / 10), // Assuming a page size of 10
      currentPage: 1, // Assuming we are on the first page
      pageSize: 10, // Assuming a page size of 10
      items: cats, // The items for the current page
    };
    // Returning the cats as part of a pagination response    
    return pagination;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }

}
