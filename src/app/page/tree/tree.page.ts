import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonSplitPane
}
from '@ionic/angular/standalone';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.page.html',
  styleUrls: ['./tree.page.scss'],
  standalone: true,
  imports: [
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonButton,
    IonSplitPane,
  ],
})
export class TreePage  implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {}

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
