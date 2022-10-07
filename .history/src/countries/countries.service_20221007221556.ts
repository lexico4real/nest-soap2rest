import { Injectable } from '@nestjs/common';
import Remote from './countries.remote';

@Injectable()
export class CountriesService {
  async getCountries() {
    console.log('countries.service.ts... Getting countries...');
    return 
  }
}
