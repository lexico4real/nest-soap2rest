import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoapMultiplyModule } from './soap-multiply/soap-multiply.module';
import { SoapAdditionController } from './soap-addition/soap-addition.controller';
import { SoapAdditionModule } from './soap-addition/soap-addition.module';

@Module({
  imports: [SoapMultiplyModule, SoapAdditionModule],
  controllers: [AppController, SoapAdditionController],
  providers: [AppService],
})
export class AppModule {}
