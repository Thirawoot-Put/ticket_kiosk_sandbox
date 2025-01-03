import { Injectable } from '@nestjs/common';
import axios from 'axios';

const API_URL = 'http://example.com';

@Injectable()
export class TicketApiRepository {
  async health() {
    return await axios.get(`${API_URL}`);
  }
}
