import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './health/health.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    HealthModule,
    BookingModule,
  ],
})
export class AppModule {}