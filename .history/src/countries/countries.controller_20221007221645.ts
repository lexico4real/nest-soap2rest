import { Controller } from '@nestjs/common';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesS) {}
}
