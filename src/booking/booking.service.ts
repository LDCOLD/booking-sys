import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  /**
   * Создание бронирования с проверкой пересечений
   */
  async createBooking(data: {
    userId: string;
    resource: string;
    startDate: Date;
    endDate: Date;
  }) {
    // 1. Проверка пересечений (основное бизнес-правило)
    const conflict = await this.prisma.booking.findFirst({
      where: {
        resource: data.resource,
        status: { not: 'CANCELLED' },
        AND: [
          { startDate: { lt: data.endDate } },
          { endDate: { gt: data.startDate } },
        ],
      },
    });

    // 2. Блокировка конфликта
    if (conflict) {
      throw new ConflictException('Time slot is already booked');
    }

    // 3. Создание записи
    return this.prisma.booking.create({
      data: {
        userId: data.userId,
        resource: data.resource,
        startDate: data.startDate,
        endDate: data.endDate,
        status: 'PENDING',
      },
    });
  }
}