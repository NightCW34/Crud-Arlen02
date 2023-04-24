import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { Client } from './entities/client.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client]), // Importa la entidad de cliente en el módulo
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
