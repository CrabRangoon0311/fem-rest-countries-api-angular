import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CountryListPageComponent } from "./country-list-page/country-list-page.component";
import { provideHttpClient } from "@angular/common/http";
import { CountryDetailComponent } from "./country-detail/country-detail.component";
import { CountryCardComponent } from "./country-card/country-card.component";
import { HeaderComponent } from "./header/header.component";
import { SearchBoxComponent } from './search-box/search-box.component';
import { MagnifyingGlassComponent } from './icons/magnifying-glass/magnifying-glass.component';
import { FormsModule } from "@angular/forms";
import { RegionFilterComponent } from './region-filter/region-filter.component';
import { CountryDetailPageComponent } from './country-detail-page/country-detail-page.component';
import { ArrowLeftComponent } from './icons/arrow-left/arrow-left.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListPageComponent,
    CountryDetailComponent,
    CountryCardComponent,
    HeaderComponent,
    SearchBoxComponent,
    RegionFilterComponent,
    CountryDetailPageComponent,
    ArrowLeftComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MagnifyingGlassComponent
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
