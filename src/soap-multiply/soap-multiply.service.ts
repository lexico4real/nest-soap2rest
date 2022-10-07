import { Injectable } from '@nestjs/common';
import Remote from './multiply.remote';

@Injectable()
export class SoapMultiplyService {
  async multiply(firstNumber: string, secondNumber: string): Promise<any> {
    const firstNum = parseInt(firstNumber);
    const secondNum = parseInt(secondNumber);

    return await Remote.multipleTwoOperands(firstNum, secondNum);
  }
}
