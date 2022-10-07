import { Injectable } from '@nestjs/common';
import Remote from './addition.remote';

@Injectable()
export class SoapAdditionService {
  async add(firstNumber: string, secondNumber: string): Promise<any> {
    const firstNum = parseInt(firstNumber);
    const secondNum = parseInt(secondNumber);

    return await Remote.addTwoOperands(firstNum, secondNum);
  }
}
