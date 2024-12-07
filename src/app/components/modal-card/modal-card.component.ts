import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonModal,
  IonHeader,
  IonTitle,
  IonButton,
  IonButtons,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonThumbnail
} from '@ionic/angular/standalone';


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
    IonButtons,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    CommonModule,
    IonThumbnail
  ],
})
export class ModalCardComponent {
  @Input() title = 'Modal Card';
  @Input() treeName = 'Modal Card';
  @Input() treeData: { [key: string]: any } = {};
  @Input() modalOpen = false;
  @Input() imageUrl = '';

  isModalOpen = false;
  keys: string[] = [];

  ngOnChanges() {
    if (this.modalOpen !== this.isModalOpen) {
      this.isModalOpen = this.modalOpen;
      this.keys = Object.keys(this.treeData);
      console.log( 'Open', this.isModalOpen, 'keys', this.keys, 'treeData', this.treeData);
    }
  }

  setOpen(isOpen: boolean) {
    console.log('isModalOpen', this.isModalOpen); 
    if (this.isModalOpen !== isOpen) {
      this.isModalOpen = isOpen;
    }
  }
}
