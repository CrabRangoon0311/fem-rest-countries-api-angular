import { Component } from "@angular/core";
import { ThemeService } from "../services/theme.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css"
})
export class HeaderComponent {
  constructor(private _themeService: ThemeService) { }

  get iconUrl() {
    const iconName = this._themeService.getActiveTheme() == "dark" ? "moon-icon-dark.svg" : "moon-icon.svg";
    return `assets/${iconName}`;
  }

  handleToggleThemeClick() {
    this._themeService.toggleTheme();
  }
}
