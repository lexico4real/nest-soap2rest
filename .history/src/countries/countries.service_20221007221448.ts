import { Injectable } from '@nestjs/common';

@Injectable()
export class CountriesService {
  async getCountries() {
    console.log('countries.service.ts... Getting countries...');
    return 'countries';
  }
}
