import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

//const API_URL = 'http://example.com';

@Injectable()
export class TicketApiRepository {
  constructor(private readonly configService: ConfigService) {}
  async health() {
    const TICKET_API_URL = this.configService.get<string>('API_URL');
    return await axios.get(TICKET_API_URL);
  }
}
