import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateComputerDto, UpdateComputerDto } from './dto/computer.dto';
import { ComputerService } from './computer.service';

@Controller('computers')
export class ComputerController {
  constructor(private readonly computerService: ComputerService) {}

  @Get()
  async findAll() {
    return this.computerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.computerService.findOne(id);
  }

  @Post()
  async create(@Body() createComputerDto: CreateComputerDto) {
    return this.computerService.create(createComputerDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateComputerDto: UpdateComputerDto,
  ) {
    return this.computerService.update(id, updateComputerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.computerService.remove(id);
  }
}
