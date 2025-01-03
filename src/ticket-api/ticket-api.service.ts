import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { TicketApiRepository } from './ticket-api.repository';

@Injectable()
export class TicketApiService {
  constructor(private readonly ticketApiReposetory: TicketApiRepository) { }

  health() {
    this.ticketApiReposetory.health().catch((e) => {
      console.error(e);
      throw new InternalServerErrorException(e);
    });
    return `healthy`;
  }
}
