export enum UnitTypes {
  Feet = 0,
  Inches = 1,
  Miles = 2,
  Millimeter = 3,
  Centimeter = 4,
  Meter = 5,
  Kilometer = 6,
  KilometersPerHour = 7,
  Knots = 8,
  MilesPerHour = 9,
  MetersPerSecond = 10,
  HectoPascals = 11,
  InchesOfMercury = 12,
  KiloPascals = 13,
  Millibars = 14,
  MillimetersOfMercury = 15,
  PoundsPerSquareInch = 16,
  Celsius = 17,
  Fahrenheit = 18,
  Kelvin = 19,
  Percent = 20,
  Float = 21,
  Integer = 22,
}

export interface SearchQueryResponse {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
}

export interface CityCurrentForecast {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  IsDayTime: boolean;
  Temperature: {
    Metric: {
      Value: number;
      Unit: string;
      UnitType: UnitTypes;
    };
    Imperial: {
      Value: number;
      Unit: string;
      UnitType: UnitTypes;
    };
  };
  MobileLink: string;
  Link: string;
}

export interface CityGeoDetails {
  Version: Number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  EnglishName: string;
  PrimaryPostalCode: string;
  Region: {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
  };
  Country: {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
    Level: number;
    LocalizedType: string;
    EnglishType: string;
    CountryID: string;
  };
  TimeZone: {
    Code: string;
    Name: string;
    GmtOffset: number;
    IsDaylightSaving: boolean;
    NextOffsetChange: string;
  };
  GeoPosition: {
    Latitude: number;
    Longitude: number;
    Elevation: {
      Metric: {
        Value: number;
        Unit: string;
        UnitType: UnitTypes;
      };
      Imperial: {
        Value: number;
        Unit: string;
        UnitType: UnitTypes;
      };
    };
  };
  IsAlias: boolean;
  SupplementalAdminAreas: [];
  DataSets: string[];
}

export interface CityFutureForecast {
  Headline: CityFutureForecastHeadline;
  DailyForecasts: DailyForecast[];
}

export interface CityFutureForecastHeadline {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: string;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
}

export interface DailyForecast {
  Date: string;
  EpochDate: number;
  Temperature: {
    Minimum: {
      Value: number;
      Unit: string;
      UnitType: UnitTypes;
    };
    Maximum: {
      Value: number;
      Unit: string;
      UnitType: UnitTypes;
    };
  };
  Day: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation?: boolean;
    PrecipitationType?: string;
    PrecipitationIntensity?: string;
  };
  Night: {
    Icon?: number;
    IconPhrase?: string;
    HasPrecipitation?: boolean;
    PrecipitationType?: string;
    PrecipitationIntensity?: string;
  };
  Sources: string[];
  MobileLink: string;
  Link: string;
}

export interface CityData {
  isFavorite: boolean;
  currentForecast: CityCurrentForecast;
  futureForecast: CityFutureForecast;
  cityName: string;
}

export type Cities = Record<string, CityData>;
