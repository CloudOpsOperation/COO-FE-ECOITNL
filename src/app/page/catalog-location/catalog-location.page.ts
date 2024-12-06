import { Component, OnInit } from '@angular/core';
import { CardTableComponent } from 'src/app/components/card-table/card-table.component';
import { AxiosRequestService } from 'src/app/services/request.service';
import { 
  IonContent, 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-catalog-location',
  templateUrl: './catalog-location.page.html',
  styleUrls: ['./catalog-location.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    CardTableComponent
  ]
})
export class CatalogLocationPage implements OnInit {
  title: string = 'Ubicación de los Árboles en el Campus';
  description: string = 'Este catálogo muestra información básica sobre los árboles y sus ubicaciones mediante coordenadas de latitud y longitud.';
  tableTitle: string = 'Lista de Árboles con Ubicación';
  columns: string[] = ['ID', 'Nombre Común', 'Nombre Científico', 'Latitud', 'Longitud'];
  rows: any[] = [];
  page: number = 1;
  pageSize: number = 20;
  totalPage: number = 0; 

  constructor(private axiosRequestService: AxiosRequestService) { }

  ngOnInit() {
    this.fetchlocation(this.page, this.pageSize);
  }

  async fetchlocation( page: number = 1, pageSize: number = 20) {
    const response = await this.axiosRequestService.request(
      'http://127.0.0.1:8080/api/v1/treeinfo-location',
      'POST',
      { "Ppage": page, "PpageSize": pageSize },
      { 'Content-Type': 'application/json' }
    );

    this.totalPage = response[0].totalPages;
    this.rows.push(...response[0].location.map((location: any) => {
      return [
        location.tree_id,
        location.common_name,
        location.scientific_name,
        location.latitude,
        location.longitude
      ];
    }
    ));
    console.log(this.rows);
  }

  async loadData(event: any) {
    if (this.page < this.totalPage) {
      this.page++;
      await this.fetchlocation(this.page, this.pageSize);
      event.target.complete();
    } else {
      event.target.disabled = true;
    }
  }

}
