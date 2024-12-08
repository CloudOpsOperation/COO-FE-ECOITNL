import { Component, OnInit } from '@angular/core';
import { CardTableComponent } from 'src/app/components/card-table/card-table.component';
import { 
  IonContent, 
} from '@ionic/angular/standalone';
import { AxiosRequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-catalog-tree',
  templateUrl: './catalog-tree.page.html',
  styleUrls: ['./catalog-tree.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    CardTableComponent
  ],
  providers: [AxiosRequestService]
})
export class CatalogTreePage implements OnInit {
  title: string = 'Descubre la riqueza arbórea de nuestro campus';
  description: string = 'Este catálogo contiene información detallada sobre los árboles, incluyendo su nombre común, científico, diámetro, altura, edad, y más.';
  tableTitle: string = 'Lista de Árboles';
  columns: string[] = ['ID', 'Nombre Común', 'Nombre Científico', 'Diámetro', 'Fronda', 'Altura', 'Edad', 'Condición', 'Notas'];
  rows: any[] = [];
  page: number = 1;
  pageSize: number = 20;
  totalPage: number = 0; 


  constructor(private axiosRequestService: AxiosRequestService) { }

  ngOnInit() {
    this.fetchTreeInfo(this.page, this.pageSize);
  }

  async fetchTreeInfo( page: number = 1, pageSize: number = 20) {
    const apiUrl = `${environment.apiUrl}/treeinfo`;
    const response = await this.axiosRequestService.request(
      apiUrl,
      'POST',
      { "Ppage": page, "PpageSize": pageSize },
      { 'Content-Type': 'application/json' }
    );

    this.totalPage = response[0].totalPages;
    this.rows.push(...response[0].trees.map((tree: any) => {
      return [
        tree.tree_id,
        tree.common_name,
        tree.scientific_name,
        tree.trunk_diameter,
        tree.canopy_width,
        tree.height,
        tree.age,
        tree.tree_condition,
        tree.notes.String
      ];
    }
    ));
  }

  async loadData(event: any) {
    if (this.page < this.totalPage) {
      this.page++;
      await this.fetchTreeInfo(this.page, this.pageSize);
      event.target.complete();    
    } else {
      event.target.disabled = true;
    }
  }

  async onRowClick(row: any) {
    const id = row[0]; 
    console.log('Fila clickeada:', id);
    const apiUrl = `${environment.apiUrl}/genarateqr`;
    const response = await this.axiosRequestService.request(
      apiUrl,
      'POST',
      { "PtreeID": id },
      { 'Content-Type': 'application/json' },
      'blob'
    );

    if (response && response instanceof Blob) {
      const url = window.URL.createObjectURL(response);  
      const link = document.createElement('a');
      link.href = url;
      link.download = `tree_${id}.png`;  
      link.click();
      window.URL.revokeObjectURL(url);  
    } else {
      console.error('La respuesta no es un Blob válido.');
    }
  }

}
