import { Card, CardContent, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { WEATHER_API } from '../data/constant';
import { Current, Geolocation } from '../types/type_defs';
export const SkiCity = ({
  city,
  filter,
}: {
  city: Geolocation;
  filter: boolean;
}) => {
  const [current, setCurrent] = React.useState<Current>();
  React.useEffect(() => {
    const getWeather = async () => {
      const res = await axios.get(
        `${WEATHER_API}&lat=${city.lat}&lon=${city.lon}`
      );
      setCurrent({ ...res.data.current, ...res.data.alerts });
    };
    if (city) {
      // getWeather();
    }
  }, [city]);
  const reason = React.useMemo(() => {
    if (current) {
      return current.alerts
        ? 'Weather Alert'
        : current.temp > 50
        ? 'Temperature is too high (more than 50)'
        : null;
    }
    return null;
  }, [current]);
  return filter && reason ? null : (
    <Grid item xs={6} sx={{ textAlign: 'left' }}>
      {current ? (
        <Card style={{}}>
          <CardContent>
            <Typography sx={{ fontSize: 18 }} color='text.primary' gutterBottom>
              Location : {city.name}
            </Typography>
            <Typography variant='h5' component='div'>
              Temperature : {current?.temp} &deg;F{' '}
              <Typography component='span' variant='subtitle2'>
                {' '}
                {reason}
              </Typography>
            </Typography>
            <Typography>Wind Speed : {current?.wind_speed} MPH</Typography>
          </CardContent>
        </Card>
      ) : (
        'Failed fetching weather data via API'
      )}
    </Grid>
  );
};
