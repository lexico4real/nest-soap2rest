import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoapMultiplyModule } from './soap-multiply/soap-multiply.module';
// import { SoapAdditionController } from './soap-addition/soap-addition.controller';
import { SoapAdditionModule } from './soap-addition/soap-addition.module';
import { CountriesService } from './countries/countries.service';
import { CountriesController } from './countries/countries.controller';
import { CountriesModule } from './countries/countries.module';
import { IsbnVerifierModule } from './isbn-verifier/isbn-verifier.module';

@Module({
  imports: [SoapMultiplyModule, SoapAdditionModule, CountriesModule, IsbnVerifierModule],
  controllers: [AppController, CountriesController],
  providers: [AppService, CountriesService],
})
export class AppModule {}
