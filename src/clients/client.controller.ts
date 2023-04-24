import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/client.dto';
import { UpdateClientDto } from './dto/updateclient.dto';
import { Client } from './entities/client.entity';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async createClient(
    @Body() createClientDto: CreateClientDto,
  ): Promise<Client> {
    return this.clientService.createClient(createClientDto);
  }

  @Get()
  async getAllClients(): Promise<Client[]> {
    return this.clientService.getAllClients();
  }

  @Get(':id')
  async getClientById(@Param('id') id: string): Promise<Client> {
    return this.clientService.getClientById(id);
  }

  @Put(':id')
  async updateClient(
    @Param('id') id: string,
    @Body() updateClientDto: UpdateClientDto,
  ): Promise<Client> {
    return this.clientService.updateClient(id, updateClientDto);
  }

  @Delete(':id')
  async deleteClient(@Param('id') id: string): Promise<void> {
    return this.clientService.deleteClient(id);
  }
}
