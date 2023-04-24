import {
  IsNotEmpty,
  IsEmail,
  Length,
  IsISO8601,
  IsPhoneNumber,
  Matches,
} from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @Length(2, 100, { message: 'El nombre debe tener entre 2 y 100 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'El correo electrónico es requerido' })
  @IsEmail(
    {},
    { message: 'El correo electrónico debe tener un formato válido' },
  )
  email: string;

  @IsNotEmpty({ message: 'El número de teléfono es requerido' })
  @IsPhoneNumber('NI', {
    message: 'El número de teléfono debe ser válido para Nicaragua',
  })
  phone: string;

  @IsNotEmpty({ message: 'La dirección es requerida' })
  @Length(10, 200, {
    message: 'La dirección debe tener entre 10 y 200 caracteres',
  })
  address: string;

  @IsNotEmpty({ message: 'La fecha de nacimiento es requerida' })
  @IsISO8601(
    { strict: true },
    { message: 'La fecha de nacimiento debe tener un formato ISO 8601 válido' },
  )
  birthdate: string;

  @IsNotEmpty({ message: 'El código postal es requerido' })
  @Matches(/^\d{5}$/, {
    message: 'El código postal debe tener exactamente 5 dígitos numéricos',
  })
  postalCode: string;

  @IsNotEmpty({ message: 'El género es requerido' })
  gender: string;
}
