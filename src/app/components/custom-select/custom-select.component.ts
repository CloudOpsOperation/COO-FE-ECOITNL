import { Component, Input } from '@angular/core';
import {
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
}
from '@ionic/angular/standalone';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  standalone: true,
  imports: [
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
  ]
})
export class CustomSelectComponent {
  @Input() label: string = ''; 
  @Input() placeholder: string = ''; 
  @Input() options: Array<{ value: string; text: string }> = []; 
}
