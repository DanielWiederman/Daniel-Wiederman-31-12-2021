import {
  CityCurrentForecast,
  CityFutureForecast,
  CityGeoDetails,
  SearchQueryResponse,
} from "./interfaces";

export const searchQueryDummyData: SearchQueryResponse[] = [
  {
    Version: 1,
    Key: "215854",
    Type: "City",
    Rank: 31,
    LocalizedName: "Tel Aviv",
    Country: {
      ID: "IL",
      LocalizedName: "Israel",
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv",
    },
  },
  {
    Version: 1,
    Key: "3431644",
    Type: "City",
    Rank: 45,
    LocalizedName: "Telanaipura",
    Country: {
      ID: "ID",
      LocalizedName: "Indonesia",
    },
    AdministrativeArea: {
      ID: "JA",
      LocalizedName: "Jambi",
    },
  },
  {
    Version: 1,
    Key: "300558",
    Type: "City",
    Rank: 45,
    LocalizedName: "Telok Blangah New Town",
    Country: {
      ID: "SG",
      LocalizedName: "Singapore",
    },
    AdministrativeArea: {
      ID: "05",
      LocalizedName: "South West",
    },
  },
  {
    Version: 1,
    Key: "325876",
    Type: "City",
    Rank: 51,
    LocalizedName: "Telford",
    Country: {
      ID: "GB",
      LocalizedName: "United Kingdom",
    },
    AdministrativeArea: {
      ID: "TFW",
      LocalizedName: "Telford and Wrekin",
    },
  },
  {
    Version: 1,
    Key: "169072",
    Type: "City",
    Rank: 51,
    LocalizedName: "Telavi",
    Country: {
      ID: "GE",
      LocalizedName: "Georgia",
    },
    AdministrativeArea: {
      ID: "KA",
      LocalizedName: "Kakheti",
    },
  },
  {
    Version: 1,
    Key: "230611",
    Type: "City",
    Rank: 51,
    LocalizedName: "Telsiai",
    Country: {
      ID: "LT",
      LocalizedName: "Lithuania",
    },
    AdministrativeArea: {
      ID: "TE",
      LocalizedName: "Telšiai",
    },
  },
  {
    Version: 1,
    Key: "2723742",
    Type: "City",
    Rank: 55,
    LocalizedName: "Telégrafo",
    Country: {
      ID: "BR",
      LocalizedName: "Brazil",
    },
    AdministrativeArea: {
      ID: "PA",
      LocalizedName: "Pará",
    },
  },
  {
    Version: 1,
    Key: "186933",
    Type: "City",
    Rank: 55,
    LocalizedName: "Tela",
    Country: {
      ID: "HN",
      LocalizedName: "Honduras",
    },
    AdministrativeArea: {
      ID: "AT",
      LocalizedName: "Atlántida",
    },
  },
  {
    Version: 1,
    Key: "3453754",
    Type: "City",
    Rank: 55,
    LocalizedName: "Telaga Asih",
    Country: {
      ID: "ID",
      LocalizedName: "Indonesia",
    },
    AdministrativeArea: {
      ID: "JB",
      LocalizedName: "West Java",
    },
  },
  {
    Version: 1,
    Key: "3453755",
    Type: "City",
    Rank: 55,
    LocalizedName: "Telagamurni",
    Country: {
      ID: "ID",
      LocalizedName: "Indonesia",
    },
    AdministrativeArea: {
      ID: "JB",
      LocalizedName: "West Java",
    },
  },
];

export const currentCityForecastDummyData: CityCurrentForecast = {
  LocalObservationDateTime: "2021-12-31T18:58:00+02:00",
  EpochTime: 1640969880,
  WeatherText: "A shower",
  WeatherIcon: 12,
  HasPrecipitation: true,
  PrecipitationType: "Rain",
  IsDayTime: false,
  Temperature: {
    Metric: {
      Value: 18.7,
      Unit: "C",
      UnitType: 17,
    },
    Imperial: {
      Value: 66.0,
      Unit: "F",
      UnitType: 18,
    },
  },
  MobileLink:
    "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
  Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
};

export const cityGeoDetailsDummyData: CityGeoDetails = {
  Version: 1,
  Key: "215854",
  Type: "City",
  Rank: 31,
  LocalizedName: "Tel Aviv",
  EnglishName: "Tel Aviv",
  PrimaryPostalCode: "",
  Region: {
    ID: "MEA",
    LocalizedName: "Middle East",
    EnglishName: "Middle East",
  },
  Country: {
    ID: "IL",
    LocalizedName: "Israel",
    EnglishName: "Israel",
  },
  AdministrativeArea: {
    ID: "TA",
    LocalizedName: "Tel Aviv",
    EnglishName: "Tel Aviv",
    Level: 1,
    LocalizedType: "District",
    EnglishType: "District",
    CountryID: "IL",
  },
  TimeZone: {
    Code: "IST",
    Name: "Asia/Jerusalem",
    GmtOffset: 2.0,
    IsDaylightSaving: false,
    NextOffsetChange: "2022-03-25T00:00:00Z",
  },
  GeoPosition: {
    Latitude: 32.045,
    Longitude: 34.77,
    Elevation: {
      Metric: {
        Value: 34.0,
        Unit: "m",
        UnitType: 5,
      },
      Imperial: {
        Value: 111.0,
        Unit: "ft",
        UnitType: 0,
      },
    },
  },
  IsAlias: false,
  SupplementalAdminAreas: [],
  DataSets: [
    "AirQualityCurrentConditions",
    "AirQualityForecasts",
    "Alerts",
    "DailyPollenForecast",
    "ForecastConfidence",
  ],
};

export const cityFutureForecastDummyData: CityFutureForecast = {
  Headline: {
    EffectiveDate: "2021-12-31T19:00:00+02:00",
    EffectiveEpochDate: 1640970000,
    Severity: 5,
    Text: "Expect showers Friday night",
    Category: "rain",
    EndDate: "2022-01-01T07:00:00+02:00",
    EndEpochDate: 1641013200,
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2021-12-31T07:00:00+02:00",
      EpochDate: 1640926800,
      Temperature: {
        Minimum: {
          Value: 58.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 71.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 7,
        IconPhrase: "Cloudy",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
    },
    {
      Date: "2022-01-01T07:00:00+02:00",
      EpochDate: 1641013200,
      Temperature: {
        Minimum: {
          Value: 55.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 67.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 7,
        IconPhrase: "Cloudy",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
    },
    {
      Date: "2022-01-02T07:00:00+02:00",
      EpochDate: 1641099600,
      Temperature: {
        Minimum: {
          Value: 58.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 66.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 14,
        IconPhrase: "Partly sunny w/ showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Night: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
    },
    {
      Date: "2022-01-03T07:00:00+02:00",
      EpochDate: 1641186000,
      Temperature: {
        Minimum: {
          Value: 58.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 65.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
    },
    {
      Date: "2022-01-04T07:00:00+02:00",
      EpochDate: 1641272400,
      Temperature: {
        Minimum: {
          Value: 59.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 65.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
    },
  ],
};
