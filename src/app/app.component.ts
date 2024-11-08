import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { 
  IonApp, 
  IonRouterOutlet, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonSplitPane,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp, 
    IonRouterOutlet, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    MenuBarComponent, 
    CommonModule,
    IonButtons,
    IonButton,
    IonIcon,
    IonSplitPane,
    FooterComponent,
  ]
})
export class AppComponent {
  isMenuOpen: boolean;
  constructor() {
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
