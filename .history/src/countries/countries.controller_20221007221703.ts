import { CountriesService } from './../../.history/src/countries/countries.service_20221007221446';
import { Controller } from '@nestjs/common';

@Controller('countries')
export class CountriesController {
  constructor(private readonly CountriesService) {}
}