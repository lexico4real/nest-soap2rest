import { Injectable } from '@nestjs/common';
import Remote from './isbn-verifier.remote';

@Injectable()
export class IsbnVerifierService {
  async isbnVerifier(isbn: string) {
    const result = await Remote.isbnVerifier(isbn);
    return result;
  }
}
