import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatDto } from './dto/cat.dto';
import { CatInputDto } from './dto/cat-input';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  create(@Body() createCatDto: CreateCatDto): Promise<CatDto> {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll(@Query() catInputDto: CatInputDto): Promise<CatDto[]> {
    return this.catsService.findAll(catInputDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CatDto> {
    return this.catsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): Promise<CatDto> {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
