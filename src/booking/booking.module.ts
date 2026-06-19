import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { PrismaModule } from '../prisma/prisma.module';

/**
 * BookingModule — изолированный бизнес-домен бронирований
 * Отвечает за:
 * - создание брони
 * - проверку пересечений
 * - управление статусами
 */
@Module({
  imports: [PrismaModule], // доступ к базе данных
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}