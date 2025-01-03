import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketApiModule } from './ticket-api/ticket-api.module';

@Module({
  imports: [TicketApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
