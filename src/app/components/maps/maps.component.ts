import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  standalone: true,
})
export class MapsComponent  implements OnInit {
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v12';
  lat: number = 25.6650747;
  lng: number = -100.2444561;
  nortBoundsLat: number = 25.6690015;
  nortBoundsLng: number = -100.2435657;
  southBoundsLat: number = 25.6641342;
  southBoundsLng: number = -100.2443542;
  zom: number = 15.6;
  container: string = 'map';

  constructor() { }

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: this.container,
      style: this.style,
      zoom: this.zom,
      center: [this.lng, this.lat],
    //   maxBounds: [
    //     [this.southBoundsLng, this.southBoundsLat],
    //     [this.nortBoundsLng, this.nortBoundsLat]
    // ]
  });

  }


}
