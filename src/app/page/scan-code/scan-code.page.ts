import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Html5Qrcode } from "html5-qrcode";
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
    IonText
  ]
})
export class ScanCodePage  implements OnInit {
  isScanning = false; // Controla si se está escaneando
  scannedData: string | null = null;
  qrCodeScanner: Html5Qrcode | null = null;

  constructor() {}

  ngOnInit() {}

  async pedirPermisosCamara(): Promise<boolean> {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      return true;
    } catch (error) {
      alert("No se pudo acceder a la cámara. Asegúrate de haber otorgado permisos.");
      return false;
    }
  }

  async stopScan() {
    this.isScanning = false;
    if (this.qrCodeScanner) {
      await this.qrCodeScanner.stop();
      this.qrCodeScanner.clear();
    }
  }

  async startScan() {
    if (this.isScanning) {
      this.isScanning = false;
      if (this.qrCodeScanner) {
        await this.qrCodeScanner.stop();
        this.qrCodeScanner.clear();
      }
    } else {
      const permisosConcedidos = await this.pedirPermisosCamara();
      if (permisosConcedidos) {
        this.isScanning = true;
        if (!this.qrCodeScanner) {
          this.qrCodeScanner = new Html5Qrcode("reader"); // Aquí está el contenedor 'reader'
        }
  
        try {
          await this.qrCodeScanner.start(
            { facingMode: "environment" }, // Cámara trasera
            { fps: 10, qrbox: 250 },
            (decodedText) => {
              this.scannedData = decodedText;
              this.stopScan(); // Detener escaneo automáticamente después de leer un código
            },
            (error) => {
              console.warn("Error al escanear:", error);
            }
          );
        } catch (err) {
          console.error("Error iniciando el escáner:", err);
        }
      }
    }
  }
}
