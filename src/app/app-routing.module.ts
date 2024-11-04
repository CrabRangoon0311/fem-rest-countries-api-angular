import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountryListPageComponent } from "./country-list-page/country-list-page.component";
import { CountryDetailPageComponent } from "./country-detail-page/country-detail-page.component";

export const RouteParams = {
  CountryCode: "countryCode"
}

const routes: Routes = [
  { path: "", component: CountryListPageComponent },
  { path: `:${RouteParams.CountryCode}`, component: CountryDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
