import { IsString, IsPhoneNumber, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsPhoneNumber('US')
  phoneNumber: string;

  @IsString()
  @Length(8, 128)
  password: string;
}
