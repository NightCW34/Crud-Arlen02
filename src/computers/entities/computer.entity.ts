import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

@Entity()
export class Computers {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  @IsString()
  @IsNotEmpty()
  marca: string;

  @Column({ type: 'varchar', length: 50 })
  @IsString()
  @IsNotEmpty()
  modelo: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  precio: number;

  @Column({ type: 'text' })
  @IsString()
  @Length(10, 1000)
  descripcion: string;
}
