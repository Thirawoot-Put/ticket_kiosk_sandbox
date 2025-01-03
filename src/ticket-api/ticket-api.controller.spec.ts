import { Test, TestingModule } from '@nestjs/testing';
import { TicketApiController } from './ticket-api.controller';
import { TicketApiService } from './ticket-api.service';

describe('HttpController', () => {
  let controller: TicketApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketApiController],
      providers: [TicketApiService],
    }).compile();

    controller = module.get<TicketApiController>(TicketApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
