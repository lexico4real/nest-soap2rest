import { IsbnVerifierService } from './isbn-verifier.service';
import { Controller, Post } from '@nestjs/common';

@Controller('isbn-verifier')
export class IsbnVerifierController {
  constructor(private readonly isbnVerifierService: IsbnVerifierService) { }
  
  @Post
}
