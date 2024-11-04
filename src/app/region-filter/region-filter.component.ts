import { Component, Input } from '@angular/core';
import { CountryFilterService } from "../services/country-filter.service";

@Component({
  selector: 'app-region-filter',
  templateUrl: './region-filter.component.html',
  styleUrl: './region-filter.component.css'
})
export class RegionFilterComponent {
  allRegions: ReadonlyArray<string> = ["Africa", "Americas", "Antarctic", "Asia", "Europe", "Polar", "Oceania"];

  @Input()
  selectedRegion: string = "";

  constructor(private _countryFilterService: CountryFilterService) { }

  handleRegionChange(region: string) {
    this._countryFilterService.regionFilter.set(region);
  }
}
