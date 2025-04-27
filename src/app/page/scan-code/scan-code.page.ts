import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Html5Qrcode } from "html5-qrcode";
import { ModalCardComponent } from 'src/app/components/modal-card/modal-card.component';
import { AxiosRequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon, 
  IonText
}
from '@ionic/angular/standalone';

@Component({
  selector: 'app-scan-code',
  templateUrl: './scan-code.page.html',
  styleUrls: ['./scan-code.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    CommonModule,
    IonText,
    ModalCardComponent
  ]
})
export class ScanCodePage  implements OnInit {  
  isScanning = false; 
  scannedData: string | null = null;
  qrCodeScanner: Html5Qrcode | null = null;
  isModalOpen=false;
  titleModal='';
  modalName='';
  modalData: { [key: string]: any } = {};

  constructor(private axiosRequestService: AxiosRequestService) {}

  ngOnInit() {
    this.requestPermission();
  }

  async requestPermission() {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      return true;
    } catch (error) {
      alert("Not allowed to use camera");
      return false;
    }
  }

  async stopScan() {
    this.isScanning = false;
    this.isModalOpen = false;
    this.titleModal = '';
    this.modalName = '';
    this.modalData = {};
    if (this.qrCodeScanner) {
      await this.qrCodeScanner.stop();
      this.qrCodeScanner.clear();
    }
  }

  async startScan() {
    this.isScanning = true;
    if (!this.qrCodeScanner) {
      this.qrCodeScanner = new Html5Qrcode("reader");
    }

    try {
      await this.qrCodeScanner.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        (decodedText) => {
          this.scannedData = decodedText;
          this.stopScan();
          this.openModal( parseInt(this.scannedData) );
        },
        (error) => {
          console.warn("Error scanning:", error);
        }
      );
    } catch (err) {
      console.error("Error initializing scanner:", err);
    }
  }

  async onScan() {
    await this.requestPermission();
    if (this.isScanning) {
      console.log("Stopping scan");
      this.stopScan();
    } else if (!this.isScanning) {
      console.log("Starting scan");
      this.startScan();
      console.log(this.scannedData)
    }
  }

  async openModal( id: number ) {
    const apiUrl = `${environment.apiUrl}/treeinfobyid`;
    const response = await this.axiosRequestService.request(
      apiUrl,
      'POST',
      { "PtreeID": id },
      { 'Content-Type': 'application/json' }
    );

    this.isModalOpen = true;
    this.titleModal = 'Modal Card';
    this.modalName = 'Modal Card';
    const data = {
      Arbol: response.tree_id,
      nombre: response.common_name,
      Científico: response.scientific_name,
      latitud: response.latitude,
      longitud: response.longitude,
      altura: response.height,
      diametro: response.trunk_diameter,
      ancho: response.canopy_width,
      edad: response.age,
      estado: response.tree_condition,
    }
    this.modalData = data;
  }
}
