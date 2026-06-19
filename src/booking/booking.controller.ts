import { Body, Controller, Post } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  /**
   * POST /bookings
   */
  @Post()
  create(@Body() body: any) {
    return this.bookingService.createBooking({
      userId: body.userId,
      resource: body.resource,
      startDate: new Date(body.startDate),
      endDate: new Date(body.endDate),
    });
  }
}