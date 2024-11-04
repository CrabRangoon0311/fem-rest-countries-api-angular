import { Country } from "../../types";

export class CountryCardViewModel {
    name: string;
    flagUrl: string;
    population: string;
    region: string;
    capital: string;

    constructor(country: Country | undefined) {
        this.name = country?.name ?? "";
        this.flagUrl = country?.flags?.png ?? "";
        this.population = country?.population?.toLocaleString() ?? "";
        this.region = country?.region ?? "";
        this.capital = country?.capital ?? "";
    }
}