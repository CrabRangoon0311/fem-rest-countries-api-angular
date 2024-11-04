import { Injectable } from "@angular/core";
import { ThemeType } from "../../types";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  constructor() {
    if (this.themeAttr != null)
      return;

    this.initializeTheme();
  }

  private get themeAttr() {
    return document.documentElement.getAttribute("data-theme");
  }

  private initializeTheme() {
    let theme: ThemeType = "dark";
    if (window.matchMedia("(prefers-color-scheme: light)").matches || localStorage.getItem("theme") === "light")
      theme = "light";

    this.setActiveTheme(theme);
  }

  getActiveTheme() {
    return (this.themeAttr ?? "dark") as ThemeType;
  }

  setActiveTheme(theme: ThemeType) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  toggleTheme() {
    let theme: ThemeType = this.getActiveTheme();
    theme = theme == "dark" ? "light" : "dark";

    this.setActiveTheme(theme);
  }
}
