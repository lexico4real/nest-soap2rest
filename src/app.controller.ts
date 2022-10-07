import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('remote')
  async getRemote(
    @Body('firstNumber') firstNumber: string,
    @Body('secondNumber') secondNumber: string,
  ): Promise<any> {
    return await this.appService.getRemote(firstNumber, secondNumber);
  }
}
