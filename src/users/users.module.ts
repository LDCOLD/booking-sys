import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaModule } from '../prisma/prisma.module';

/**
 * Модуль пользователей:
 * объединяет контроллер, сервис и зависимости
 */
@Module({
  imports: [PrismaModule], // доступ к базе данных
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}