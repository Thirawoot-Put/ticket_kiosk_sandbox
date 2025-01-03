import { Injectable } from '@nestjs/common';
import { TicketApiRepository } from './ticket-api.repository';

@Injectable()
export class TicketApiService {
  constructor(private readonly ticketApiReposetory: TicketApiRepository) { }

  health() {
    this.ticketApiReposetory.health().catch((e) => {
      console.error(e);
      throw e;
    });
    return `healthy`;
  }
}
