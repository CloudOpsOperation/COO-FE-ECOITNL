import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { 
  IonContent, 
  IonMenu, 
  IonIcon,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonButton
} from '@ionic/angular/standalone';


@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  standalone: true,
  imports: [  
    IonContent, 
    IonMenu, 
    IonIcon,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    RouterModule,
    IonItemDivider,
    IonButton
  ]
})
export class MenuBarComponent  implements OnInit {
  user: string;

  constructor() { 
    this.user = 'User';
  }

  ngOnInit() {

  }

  getHomeRoute() {
    switch (this.user) {
      case 'User':
        return '/home';
      default:
        return '/login';
    }
  }
}
