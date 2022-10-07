import { Body, Controller, Post } from '@nestjs/common';
import { SoapMultiplyService } from './soap-multiply.service';

@Controller('soap-multiply')
export class SoapMultiplyController {
  constructor(private readonly soapMultiplyService: SoapMultiplyService) {}

  @Post()
  async multiply(
    @Body('firstNumber') firstNumber: string,
    @Body('secondNumber') secondNumber: string,
  ): Promise<any> {
    return await this.soapMultiplyService.multiply(firstNumber, secondNumber);
  }
}
