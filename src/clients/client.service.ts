import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/client.dto';
import { UpdateClientDto } from './dto/updateclient.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async createClient(createClientDto: CreateClientDto): Promise<Client> {
    const client = this.clientRepository.create(createClientDto);
    return this.clientRepository.save(client);
  }

  async getAllClients(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  async getClientById(id: string): Promise<Client> {
    const client = await this.clientRepository.findOne({ where: { id } });
    if (!client) {
      throw new NotFoundException(`Client with ID "${id}" not found`);
    }
    return client;
  }

  async updateClient(
    id: string,
    updateClientDto: UpdateClientDto,
  ): Promise<Client> {
    const client = await this.getClientById(id);
    // Convertir la fecha de nacimiento a tipo Date antes de asignarla
    if (updateClientDto.birthdate) {
      updateClientDto.birthdate = new Date(
        updateClientDto.birthdate,
      ).toISOString();
    }
    this.clientRepository.merge(client, updateClientDto);
    return this.clientRepository.save(client);
  }

  async deleteClient(id: string): Promise<void> {
    const result = await this.clientRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Client with ID "${id}" not found`);
    }
  }
}
