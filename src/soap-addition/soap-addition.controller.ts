import { Body, Controller, Post } from '@nestjs/common';
import { SoapAdditionService } from './soap-addition.service';

@Controller('soap-addition')
export class SoapAdditionController {
  constructor(private readonly soapAdditionService: SoapAdditionService) {}

  @Post()
  async add(
    @Body('firstNumber') firstNumber: string,
    @Body('secondNumber') secondNumber: string,
  ): Promise<any> {
    return await this.soapAdditionService.add(firstNumber, secondNumber);
  }
}
