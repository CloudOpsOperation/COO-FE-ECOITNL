import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import axios from 'axios'; // Importar Axios

import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonImg, 
  IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-catalog-tree',
  templateUrl: './catalog-tree.page.html',
  styleUrls: ['./catalog-tree.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonCardContent,
  ]
})
export class CatalogTreePage implements OnInit {
  trees: any[] = []; // Array para almacenar los datos de los árboles
  loading: boolean = true; // Indicador de carga
  error: string = ''; // Mensaje de error, si ocurre

  constructor() {}

  ngOnInit() {
    this.fetchTreeInfo();
  }

  // Método para obtener datos del endpoint usando Axios
  fetchTreeInfo() {
    const apiUrl = 'http://127.0.0.1:8080/api/v1/treeinfo';
    const body = { "PLimit": 0 };

    axios.post(apiUrl, body)
      .then(response => {
        this.trees = response.data;
        this.loading = false;
      })
      .catch(error => {
        this.error = error;
        this.loading = false;
      });
  }
}
