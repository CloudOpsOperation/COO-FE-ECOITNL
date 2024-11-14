import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { CustomSelectComponent } from 'src/app/components/custom-select/custom-select.component';


@Component({
  selector: 'maps-component',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  standalone: true,
  imports: [
    CustomSelectComponent,
  ]
})
export class MapsComponent implements OnInit {
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v12';
  alternateStyle = 'mapbox://styles/mapbox/satellite-v9';
  lat: number = 25.6650747;
  lng: number = -100.2444561;
  zoomLevel: number = 15.6;
  container: string = 'map';

  // Select Data
  titleSelect = 'Select a map style';
  placeholderSelect = 'Select a map style';
  optionsSelect = [
    { value: 'streets', text: 'Streets' },
    { value: 'satellite', text: 'Satellite' },
    { value: 'hybrid', text: 'Hybrid' },
    { value: 'light', text: 'Light' },
    { value: 'dark', text: 'Dark' },
    { value: 'outdoors', text: 'Outdoors' },
  ];
  
  constructor() {}

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: this.container,
      style: this.style,
      zoom: this.zoomLevel,
      center: [this.lng, this.lat],
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  zoomIn() {
    if (this.map) {
      this.map.zoomIn();
    }
  }

  zoomOut() {
    if (this.map) {
      this.map.zoomOut();
    }
  }

  changeMapStyle() {
    if (this.map) {
      // this.map.setStyle(
    }
  }
}
