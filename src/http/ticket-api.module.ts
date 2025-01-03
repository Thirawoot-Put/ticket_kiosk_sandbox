import { Module } from '@nestjs/common';
import { TicketApiController } from './ticket-api.controller';
import { TicketApiService } from './ticket-api.service';
import { TicketApiRepository } from './ticket-api.repository';
import { TicketApiUsecase } from './ticket-api.usecase';

@Module({
  controllers: [TicketApiController],
  providers: [TicketApiUsecase, TicketApiService, TicketApiRepository],
})
export class TicketApiModule { }
