import { Injectable } from '@nestjs/common';
import { TicketApiService } from './ticket-api.service';
import { HttpStatusCode } from 'axios';

@Injectable()
export class TicketApiUsecase {
  constructor(private readonly ticketService: TicketApiService) {}

  async health() {
    const res = await this.ticketService.health();
    return { statusCode: HttpStatusCode.Ok, message: 'success', data: res };
  }
}
