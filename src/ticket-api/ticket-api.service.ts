import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { TicketApiRepository } from './ticket-api.repository';

@Injectable()
export class TicketApiService {
  constructor(private readonly ticketApiReposetory: TicketApiRepository) {}

  async health() {
    try {
      await this.ticketApiReposetory.health();
      return `healthy`;
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException(e);
    }
  }
}
