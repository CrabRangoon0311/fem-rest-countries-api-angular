import { Component, signal, WritableSignal } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { RouteParams } from "../app-routing.module";

@Component({
  selector: 'app-country-detail-page',
  templateUrl: './country-detail-page.component.html',
  styleUrl: './country-detail-page.component.css'
})
export class CountryDetailPageComponent {
  countryCode: WritableSignal<string> = signal("");

  constructor(private _location: Location, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.pipe(takeUntilDestroyed()).subscribe(routeParams => this._initialize(routeParams[RouteParams.CountryCode]));
  }

  navigateBack() {
    this._location.back();
  }

  private _initialize(countryCode: string) {
    this.countryCode.set(countryCode);
  }
}
