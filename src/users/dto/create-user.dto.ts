import { IsEmail, IsString, MinLength } from 'class-validator';

/**
 * DTO = объект, который описывает и валидирует входные данные
 * Здесь мы защищаем систему от мусора и инъекций на уровне API
 */
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}