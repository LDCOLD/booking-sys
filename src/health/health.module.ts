import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';

/**
 * HealthModule — изолированный модуль диагностики системы
 * Содержит только контроллер, без бизнес-логики
 */
@Module({
  controllers: [HealthController],
})
export class HealthModule {}