import { IsBoolean, IsDate, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {

  @IsString()
  @ApiProperty({
    example: 'user@mail.com',
    description: 'The email of user',
  })
  readonly email: string;

  @IsString()
  @ApiProperty({
   description: 'The password of user',
  })
  readonly password: string;

  @IsString()
  @ApiProperty({
    description: 'The first name of user',
  })
  readonly firstName: string;

  @IsString()
  @ApiProperty({
    description: 'The last name of user',
  })
  readonly lastName: string;

  @IsDate()
  @ApiProperty({
    example: '2023-12-12',
    description: 'The date of birth of user',
  })
  readonly dob: Date;

  @IsBoolean()
  @ApiProperty({
    description: 'The status of user',
  })
  readonly active: boolean;

}