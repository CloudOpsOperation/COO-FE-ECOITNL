import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonButton,
  NavController
} from '@ionic/angular/standalone';

@Component({
  selector: 'home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonButton
  ]
})
export class HomePage {
  constructor(
    public navCtrl: NavController
  ) {}

  getMapRoute() : void {
    this.navCtrl.navigateForward('/tree-maps');
  }

  getCatalogRoute() : void {
    this.navCtrl.navigateForward('/catalog-tree');
  }

  getCatalogLocationRoute() : void {
    this.navCtrl.navigateForward('/catalog-location');
  }

  getCommentRoute() : void {
    this.navCtrl.navigateForward('/comment');
  }

  getScanRoute() : void {
    this.navCtrl.navigateForward('/scan-code');
  }
}
