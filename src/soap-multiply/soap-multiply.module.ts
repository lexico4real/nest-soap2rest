import { Module } from '@nestjs/common';
import { SoapMultiplyService } from './soap-multiply.service';
import { SoapMultiplyController } from './soap-multiply.controller';

@Module({
  providers: [SoapMultiplyService],
  controllers: [SoapMultiplyController],
})
export class SoapMultiplyModule {}
