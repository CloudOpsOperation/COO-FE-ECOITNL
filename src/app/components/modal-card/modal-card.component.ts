import { Component, Input } from '@angular/core';
import {
  IonContent,
  IonModal,
  IonHeader,
  IonTitle,
  IonButton,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from '@ionic/angular';


@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonModal,
    IonHeader,
    IonTitle,
    IonButton,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
  ],
})
export class ModalCardComponent {
  @Input() title = '';
  @Input() treeName = '';
  @Input() treeData: { [key: string]: any } = {};
  @Input() isModalOpen = false;


  getKeys(data: { [key: string]: any }): string[] {
    return Object.keys(data); // Extrae las claves del JSON
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
