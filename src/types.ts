export type Currency = {
    code: string;
    name: string;
    symbol: string;
}

export type Language = {
    name: string;
    nativeName: string;
}

export type Country = {
    name: string;
    alpha3Code: string;
    population: number;
    region: string;
    capital: string;
    flags: {
        svg: string;
        png: string;
    }
    nativeName: string;
    subregion: string;
    topLevelDomain: string[];
    currencies: Currency[];
    languages: Language[];
    borders: string[];
}

export type ThemeType = "dark" | "light";