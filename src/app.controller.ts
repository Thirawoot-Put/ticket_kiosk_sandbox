import { Controller, Get, HttpCode, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/health-check')
  @HttpCode(200)
  healthCheck(@Res() res: Response) {
    const msg = this.appService.healthCheck();
    res.json({ message: msg });
  }
}
