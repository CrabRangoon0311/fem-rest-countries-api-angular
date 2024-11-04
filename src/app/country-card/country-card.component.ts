import { Component, computed, Input } from "@angular/core";
import { Country } from "../../types";
import { CountryCardViewModel } from "./country-card-view-model";

@Component({
  selector: "app-country-card",
  templateUrl: "./country-card.component.html",
  styleUrl: "./country-card.component.css"
})
export class CountryCardComponent {
  @Input({ required: true })
  country!: Country;

  countryViewModel = computed(() => {
    return new CountryCardViewModel(this.country);
  });
}