import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { CustomSelectComponent } from 'src/app/components/custom-select/custom-select.component';
import { AxiosRequestService } from 'src/app/services/request.service';
import { ModalCardComponent } from '../modal-card/modal-card.component';
import { CommonModule } from '@angular/common';

import { 
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton, 
} from '@ionic/angular/standalone';

@Component({
  selector: 'maps-component',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  standalone: true,
  imports: [
    CustomSelectComponent,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    ModalCardComponent,
    CommonModule
  ]
})
export class MapsComponent implements OnInit {
  map: mapboxgl.Map | undefined;
  style: string = 'mapbox://styles/mapbox/streets-v12';
  lat: number = 25.6650747;
  lng: number = -100.2444561;
  zoomLevel: number = 16.5;
  container: string = 'map';

  //
  titleModal: any = '';
  treeName: any = '';
  treeData: { [key: string]: any } = {};
  isModalOpen = false;

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

  constructor(private axiosRequestService: AxiosRequestService) { }

  ngOnInit() {
    this.initMap();
    if (this.map) {
      this.map.on('click', 'trees', (e) => {
        const data: any = this.map?.queryRenderedFeatures(e.point, {
          layers: ['trees']
        })[0].properties;
      
        this.titleModal = 'ARBOL SELECCIONADO';
        this.treeName = data.title;
        this.treeData = data;
        this.isModalOpen = true;

        console.log(data);

      });
    }
  }

  initMap() {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: this.container,
      style: this.style,
      zoom: this.zoomLevel,
      center: [this.lng, this.lat],
    });

    this.map.loadImage('assets/icon/tree.png', (error, image) => {
      if (error) throw error;
      if (this.map && image) {
        this.map.addImage('tree', image);
        this.markLocation();
      }
    }
    );

    this.map.addControl(new mapboxgl.NavigationControl());
    
    this.map.once('load', () => {
      if (this.map) {
        this.map.resize();
      }
    });

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

  changeMapStyle(event: any) {
    const selectedStyle = event.target.value;
    if (this.map) {
      switch (selectedStyle) {
        case 'streets':
          console.log('streets');
          this.map.setStyle('mapbox://styles/mapbox/streets-v12');
          break;
        case 'satellite':
          this.map.setStyle('mapbox://styles/mapbox/satellite-v9');
          break;
        case 'hybrid':
          this.map.setStyle('mapbox://styles/mapbox/satellite-streets-v12');
          break;
        case 'light':
          this.map.setStyle('mapbox://styles/mapbox/light-v10');
          break;
        case 'dark':
          this.map.setStyle('mapbox://styles/mapbox/dark-v10');
          break;
        case 'outdoors':
          this.map.setStyle('mapbox://styles/mapbox/outdoors-v11');
          break;
      }
     this.initMap();
    }
  }

   async markLocation() {
    const apiUrl = `${environment.apiUrl}/treeinfo-location`;
      const response = await this.axiosRequestService.request(
        apiUrl,
        'POST',
        { "Ppage": 1, "PpageSize": 10 },
        { 'Content-Type': 'application/json' }
      );
      const locations = response[0].location.map((location: any) => {
        return {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [parseFloat(location.longitude), parseFloat(location.latitude)]
          },
          properties: {
            number: location.tree_id,
            title: location.common_name,
            description: location.scientific_name,
            latitude: location.latitude,
            longitude: location.longitude,
          }
        };
      } );

      const geojson: any = {
        type: 'FeatureCollection',
        features: locations
      };

      if (this.map) {
        this.map.addSource('trees', {
          type: 'geojson',
          data: geojson
        });
      
        this.map.addLayer({
          id: 'trees',
          type: 'symbol',
          source: 'trees',
          layout: {
            'icon-image': 'tree',
            'icon-size': 0.08,
            'icon-allow-overlap': true
          }
        });
      } 
  }
}
