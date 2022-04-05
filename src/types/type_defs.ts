export type Geolocation = {
  name?: string;
  lon: number;
  lat: number;
  distance?: number;
};

export type Current = {
  clouds: number;
  dew_point: number;
  dt: Date;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: Date;
  sunset: Date;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
  alerts?: Alert;
};

export type Alert = {
  sender_name: string;
  event: string;
  start: Date;
  end: Date;
  description: string;
  tags: string;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
