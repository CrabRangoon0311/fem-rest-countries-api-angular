import { Component, computed, input } from "@angular/core";
import { CountryService } from "../services/country.service";
import { CountryDetailViewModel } from "./country-detail-view-model";

@Component({
  selector: "app-country-detail",
  templateUrl: "./country-detail.component.html",
  styleUrl: "./country-detail.component.css"
})
export class CountryDetailComponent {
  countryCode = input.required<string>();
  countryDetailModel = computed(() => {
    return new CountryDetailViewModel(this._countryService, this._countryService.getCountry(this.countryCode()));
  });

  get borderCountries() {
    return (this.countryDetailModel().borderCountries) ?? [];
  }

  constructor(private _countryService: CountryService) { }
}
