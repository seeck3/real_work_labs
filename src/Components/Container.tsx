import { Grid } from '@mui/material';
import React from 'react';
import { Geolocation } from '../types/type_defs';
import { BeachCities } from './BeachCities';
import { SkiCities } from './SkiCities';

/**
 * 
Beach Cities
1. Miami, FL  [25.7617, -80.1918]
2. Maui, HI [20.7984, -156.3319]
3. Destin, FL [30.3935, -86.4958]
4. Clearwater, FL [27.9659, -82.8001]
5. South Padre Island, TX [26.1118, -97.1681]
6. Port Aransas, Tx [27.8339, -97.0611]
7. Santa Monica, CA [34.0195, -118.4912]
8. Panama City, FL [30.1588, -85.6602]
9. Laguna Beach, CA [33.5427, -117.7854]
10. Cape Cod, MA [41.6688, -70.2962]

Ski Cities
1. Breckenridge, Co [39.4817, -106.0384]
2. Angel Fire, NM [36.3931, -105.2850]
3. Durango, Co [37.2753, -107.8801]
4. Winter Park, Co [39.8917, -105.7631]
5. Taos, NM [36.4072, -105.5734]
6. Vail, Co [39.6433, -106.3781]
7. Aspen, Co [39.1911, -106.8175]
8. Snowbird, UT [40.5830, -111.6538]
9. Park City, UT [40.6461, -111.4980]
10. Telluride, Co [37.9375, -107.8123]
 */

export const Container = () => {
  const [userLocation, setUserLocation] = React.useState<Geolocation>();
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={6}>
        <BeachCities userLocation={userLocation} />
      </Grid>
      <Grid item xs={6}>
        <SkiCities userLocation={userLocation} />
      </Grid>
    </Grid>
  );
};
