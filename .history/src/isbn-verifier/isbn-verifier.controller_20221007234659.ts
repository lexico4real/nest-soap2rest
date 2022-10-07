import { IsbnVerifierService } from './isbn-verifier.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('isbn-verifier')
export class IsbnVerifierController {
  constructor(private readonly isbnVerifierService: IsbnVerifierService) { }
  
  @Post()
  async isbnVerifier(@Bodyisbn: string) {
    return await this.isbnVerifierService.isbnVerifier(isbn);
  }
}
