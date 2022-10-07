import { Module } from '@nestjs/common';
import { IsbnVerifierService } from './isbn-verifier.service';
import { IsbnVerifierController } from './isbn-verifier.controller';

@Module({
  providers: [IsbnVerifierService],
  controllers: [IsbnVerifierController]
})
export class IsbnVerifierModule {}
