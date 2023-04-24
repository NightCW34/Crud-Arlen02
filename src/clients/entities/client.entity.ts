import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {
  IsNotEmpty,
  IsEmail,
  Length,
  IsISO8601,
  IsPhoneNumber,
  Matches,
} from 'class-validator';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @Length(2, 100, { message: 'El nombre debe tener entre 2 y 100 caracteres' })
  name: string;

  @Column()
  @IsNotEmpty({ message: 'El correo electrónico es requerido' })
  @IsEmail(
    {},
    { message: 'El correo electrónico debe tener un formato válido' },
  )
  email: string;

  @Column()
  @IsNotEmpty({ message: 'El número de teléfono es requerido' })
  @IsPhoneNumber('NI', {
    message: 'El número de teléfono debe ser válido para Nicaragua',
  })
  phone: string;

  @Column()
  @IsNotEmpty({ message: 'La dirección es requerida' })
  @Length(10, 200, {
    message: 'La dirección debe tener entre 10 y 200 caracteres',
  })
  address: string;

  @Column()
  @IsNotEmpty({ message: 'La fecha de nacimiento es requerida' })
  @IsISO8601(
    { strict: true },
    { message: 'La fecha de nacimiento debe tener un formato ISO 8601 válido' },
  )
  birthdate: string;

  @Column()
  @IsNotEmpty({ message: 'El código postal es requerido' })
  @Matches(/^\d{5}$/, {
    message: 'El código postal debe tener exactamente 5 dígitos numéricos',
  })
  postalCode: string;

  @Column()
  @IsNotEmpty({ message: 'El género es requerido' })
  gender: string;
}
