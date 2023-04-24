import {
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsDateString,
  IsEnum,
} from 'class-validator';
import { Gender } from './gender.enum';
import { IsNiPostalCode } from './ni.postal-code'; // Actualizar el import

export class UpdateClientDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  address: string;

  @IsDateString()
  @IsOptional()
  birthdate: string;

  @IsNiPostalCode() // Usar el decorador personalizado para validar el código postal en Nicaragua (NI)
  @IsOptional()
  postalCode: string;

  @IsEnum(Gender)
  @IsOptional()
  gender: Gender;
}
