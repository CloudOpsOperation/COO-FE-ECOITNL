import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    RouterModule
  ],
})
export class TreePage  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
