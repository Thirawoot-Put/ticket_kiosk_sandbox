import { Controller, Get } from '@nestjs/common';
import { TicketApiUsecase } from './ticket-api.usecase';

@Controller('ticket-api')
export class TicketApiController {
  constructor(private readonly ticketApiUsecase: TicketApiUsecase) { }

  @Get('health')
  health() {
    return this.ticketApiUsecase.health();
  }
}
