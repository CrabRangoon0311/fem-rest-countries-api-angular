import { Component, computed, Signal, WritableSignal } from "@angular/core";
import { CountryFilterService } from "../services/country-filter.service";
import { Country } from "../../types";

@Component({
  selector: "app-country-list-page",
  templateUrl: "./country-list-page.component.html",
  styleUrl: "./country-list-page.component.css"
})
export class CountryListPageComponent {
  countries: Signal<Country[]>;
  searchText: WritableSignal<string>;
  selectedRegion: WritableSignal<string>;
  hasFilter = computed(() => {
    return this._countryFilterService.regionFilter() != "" || this._countryFilterService.searchText() != "";
  });

  constructor(private _countryFilterService: CountryFilterService) {
    this.countries = this._countryFilterService.filteredCountries;
    this.searchText = this._countryFilterService.searchText;
    this.selectedRegion = this._countryFilterService.regionFilter;
  }
}