import { Card, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import { ski_cities } from '../data/cities';
import { Geolocation } from '../types/type_defs';
import { getDistance } from '../utils/utils';
import { SkiCity } from './SkiCity';
export const SkiCities = ({ userLocation }: { userLocation?: Geolocation }) => {
  const [filter, setFilter] = React.useState(false);
  const skiCitieswithDistance = React.useMemo(() => {
    if (userLocation) {
      return ski_cities
        .map((city) => ({
          ...city,
          distance: getDistance(
            userLocation.lat,
            userLocation.lon,
            city.lat,
            city.lon
          ),
        }))
        .sort((a, b) => a.distance - b.distance);
    }
  }, [userLocation]);

  const filterCities = () => {
    setFilter(!filter);
  };
  return (
    <div>
      <Typography variant='h3'>
        Ski Cities{' '}
        <Button onClick={filterCities}>
          {!filter ? 'filter' : 'un-filter'}
        </Button>
      </Typography>
      <Card>
        <Grid item sx={{ flexGrow: 1 }} container spacing={2}>
          {skiCitieswithDistance?.map((city) => (
            <SkiCity
              key={city.lat + city.distance}
              city={city}
              filter={filter}
            />
          ))}
        </Grid>
      </Card>
    </div>
  );
};
