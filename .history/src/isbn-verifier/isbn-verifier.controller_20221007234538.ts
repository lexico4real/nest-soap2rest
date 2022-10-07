import { IsbnVerifierService } from './isbn-verifier/isbn-verifier.service_20221007234400';
import { Controller } from '@nestjs/common';

@Controller('isbn-verifier')
export class IsbnVerifierController {
  constructor(private readonly IsbnVerifierService) {}
}
