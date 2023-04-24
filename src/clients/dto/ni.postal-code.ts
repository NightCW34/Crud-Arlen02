import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'niPostalCode', async: false })
export class NiPostalCodeConstraint implements ValidatorConstraintInterface {
  validate(postalCode: string): boolean {
    const regex = /^[0-9]{5}$/;
    return regex.test(postalCode);
  }

  defaultMessage(): string {
    return 'El código postal no es válido para Nicaragua (NI)';
  }
}

export function IsNiPostalCode(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'isNiPostalCode',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: NiPostalCodeConstraint,
    });
  };
}
