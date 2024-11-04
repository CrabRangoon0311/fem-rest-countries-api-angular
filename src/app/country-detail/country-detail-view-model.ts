import { Country } from "../../types";
import { CountryService } from "../services/country.service";

export class CountryDetailViewModel {
    flagUrl: string;
    nativeName: string;
    name: string;
    population: string;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomains: string;
    currencies: string;
    languages: string;
    borderCountries: Country[] = [];

    constructor(countryService: CountryService, country: Country | undefined) {
        this.flagUrl = country?.flags.png ?? "";
        this.nativeName = country?.nativeName ?? "";
        this.name = country?.name ?? "";
        this.population = country?.population?.toLocaleString() ?? "";
        this.region = country?.region ?? "";
        this.subregion = country?.subregion ?? "";
        this.capital = country?.capital ?? "";
        this.topLevelDomains = country?.topLevelDomain?.join(", ") ?? "";
        this.currencies = country?.currencies?.map(c => c.name).join(", ") ?? "";
        this.languages = country?.languages?.map(l => l.name).join(", ") ?? "";
        this.borderCountries = country?.borders ? countryService.getCountriesByAlpha3Code(country?.borders) : [];
    }
}