import { ApiProperty } from '@nestjs/swagger';

export class User{

  id: number;

  email: string;

  password: string;

  firstName: string;

  lastName: string;

  @ApiProperty({
    example: '2023-12-29',
    description: 'The date of birth',
  })
  dob: Date;

  active: boolean;

  activationCode: number;

  createdAt: Date;

  updatedAt: Date;

}