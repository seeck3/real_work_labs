import { Card, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import { beach_cities } from '../../data/cities';
import { Geolocation } from '../../types/type_defs';
import { getDistance } from '../../utils/utils';
import { BeachCity } from './BeachCity';

export const BeachCities = ({
  userLocation,
}: {
  userLocation?: Geolocation;
}) => {
  const [filter, setFilter] = React.useState(false);
  const beachCitiesWithDistance = React.useMemo(() => {
    if (userLocation) {
      return beach_cities
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
        Beach Cities{' '}
        <Button onClick={filterCities}>
          {!filter ? 'filter' : 'un-filter'}
        </Button>
      </Typography>
      <Card>
        <Grid item sx={{ flexGrow: 1 }} container spacing={2}>
          {beachCitiesWithDistance?.map((city) => (
            <BeachCity
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
