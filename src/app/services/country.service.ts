import { HttpClient } from "@angular/common/http";
import { Injectable, Signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Country } from "../../types";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  private countriesSubject = new BehaviorSubject<Country[]>([]);
  countries: Signal<Country[]> = toSignal(this.countriesSubject, { initialValue: [] });

  constructor(private _http: HttpClient) {
    this._http.get<Country[]>("data.json").subscribe(res => this.countriesSubject.next(res));
  }

  getCountry(alpha3Code: string): Country | undefined {
    const data: Country[] = this.getCountriesByAlpha3Code([alpha3Code]);
    return data.length > 0 ? data[0] : undefined;
  }

  getCountriesByAlpha3Code(alpha3Code: string[]): Country[] {
    return this.countries().filter(c => alpha3Code.includes(c.alpha3Code));
  }
}
