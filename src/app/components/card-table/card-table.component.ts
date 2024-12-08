import { Component, Input } from '@angular/core';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonImg, 
  IonCardContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonCardContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    CommonModule
  ]
})
export class CardTableComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() tableTitle: string = '';
  @Input() columns: Array<string> = [];
  @Input() rows: Array<Array<any>> = [];
  @Input() loadData: Function = () => {};
  @Input() rowClick: Function = (row: any) => {}; 

  load(event: any) {
    if (this.loadData) {
      this.loadData(event);
    } else {
      console.error('No data load function provided');
      event.target.complete();
    }
  }

  onRowClick(row: any) {
    if (this.rowClick) {
      this.rowClick(row);
    } 
  }
}
