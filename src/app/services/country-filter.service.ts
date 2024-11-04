import { computed, Injectable, signal } from '@angular/core';
import { CountryService } from "./country.service";

@Injectable({
  providedIn: 'root'
})
export class CountryFilterService {
  searchText = signal<string>("");
  regionFilter = signal<string>("");

  filteredCountries = computed(() => {
    if (this.searchText() == "" && this.regionFilter() == "")
      return this._countryService.countries();

    return this._countryService.countries().filter(country => {
      return (this.searchText() == "" || country.name.toLocaleUpperCase().indexOf(this.searchText().toLocaleUpperCase()) > -1) &&
        (this.regionFilter() == "" || country.region.toLocaleUpperCase().indexOf(this.regionFilter().toLocaleUpperCase()) > -1);
    });
  });

  constructor(private _countryService: CountryService) { }
}
