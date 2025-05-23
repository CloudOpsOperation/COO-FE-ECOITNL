// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { map } from "rxjs";

export const environment = {
  production: false,
  apiUrl: 'http://35.89.255.142:5000/api/v1',

  mapbox: {
    accessToken: 'pk.eyJ1IjoibHVpc2phcmE5IiwiYSI6ImNtMjE3cHk4ajBlZngyanEyaXJucXJ0ZTMifQ.jrYVlD36f2I0y09xGHY67Q'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
