import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Computers } from './entities/computer.entity';
import { CreateComputerDto } from './dto/computer.dto';
import { UpdateComputerDto } from './dto/computer.dto';

@Injectable()
export class ComputerService {
  constructor(
    @InjectRepository(Computers)
    private readonly computerRepository: Repository<Computers>,
  ) {}

  async create(createComputerDto: CreateComputerDto): Promise<Computers> {
    const computer = this.computerRepository.create(createComputerDto);
    return this.computerRepository.save(computer);
  }

  async findAll(): Promise<Computers[]> {
    return this.computerRepository.find();
  }

  async findOne(id: string): Promise<Computers> {
    const computer = await this.computerRepository.findOne({ where: { id } });
    if (!computer) {
      // manejar el caso en que no se encuentra el Computers
      throw new Error(`Computers with id ${id} not found`);
    }
    return computer;
  }

  async update(
    id: string,
    updateComputerDto: UpdateComputerDto,
  ): Promise<Computers> {
    if (isNaN(Number(id))) {
      // manejar el caso en que el id no es un número
      throw new Error(`Invalid id ${id}`);
    }
    const computer = await this.computerRepository.findOne({ where: { id } });
    if (!computer) {
      // manejar el caso en que no se encuentra el Computers
      throw new Error(`Computers with id ${id} not found`);
    }
    this.computerRepository.merge(computer, updateComputerDto);
    return this.computerRepository.save(computer);
  }

  async remove(id: string): Promise<Computers> {
    if (isNaN(Number(id))) {
      // manejar el caso en que el id no es un número
      throw new Error(`Invalid id ${id}`);
    }
    const computer = await this.computerRepository.findOne({ where: { id } });
    if (!computer) {
      // manejar el caso en que no se encuentra el Computers
      throw new Error(`Computers with id ${id} not found`);
    }
    return this.computerRepository.remove(computer);
  }
}
