import { Module } from '@nestjs/common';
import { SoapAdditionController } from './soap-addition.controller';
import { SoapAdditionService } from './soap-addition.service';

@Module({
  providers: [SoapAdditionService],
  controllers: [SoapAdditionController],
})
export class SoapAdditionModule {}
