import { Controller, Get, Res } from '@nestjs/common';
import { TicketApiUsecase } from './ticket-api.usecase';
import { Response } from 'express';

@Controller('ticket-api')
export class TicketApiController {
  constructor(private readonly ticketApiUsecase: TicketApiUsecase) {}

  @Get('health')
  async health(@Res() res: Response) {
    const result = await this.ticketApiUsecase.health();
    res.status(result.statusCode).json(result);
  }
}
