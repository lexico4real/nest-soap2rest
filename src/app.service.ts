import { Injectable } from '@nestjs/common';
import Remote from './util/remote';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getRemote(firstNumber: string, secondNumber: string): Promise<any> {
    const firstNum = parseInt(firstNumber);
    const secondNum = parseInt(secondNumber);

    return await Remote.multipleTwoOperands(firstNum, secondNum);
  }
}
