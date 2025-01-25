import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { routes } from 'src/app/shared/routes/routes';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from "@angular/material/table";
import { pageSelection, apiResultFormat,docentelist } from 'src/app/shared/models/models';
import { DocenteService } from '../docente.service';
import { ToastrService } from 'ngx-toastr';
import { Docente } from 'src/app/models/docente';
import jsPDF from 'jspdf';
import * as autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-docente-list',
  templateUrl: './docente-list.component.html',
  styleUrls: ['./docente-list.component.scss']
})

export class DocenteListComponent implements OnInit{
  public routes = routes;
  
  dataSource!: MatTableDataSource<docentelist>;


  public showFilter = false;
  public searchDataValue = '';
  public lastIndex = 0;
  public pageSize = 10;
  public totalData = 0;
  public skip = 0;
  public limit: number = this.pageSize;
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages = 0;
  docenteLista: docentelist[] = [];
  selectedDocentes: docentelist[] = [];

  constructor(public data : DataService,public docenteservice:DocenteService
  ){

  }
  ngOnInit() {
    this.cargarDocentes();
  }

  cargarDocentes(): void {
    this.docenteservice.listaDocente().subscribe(
      data => {
        console.log(data); // Verifica qué datos recibes
        this.docenteLista = data;
      },
      err => {
        console.error(err);
      }
    );
  }
  
  


  private getTableData(): void {
    this.docenteLista = [];
    this.serialNumberArray = [];

    this.data.getDoctorsList().subscribe((data: apiResultFormat) => {
      this.totalData = data.totalData;
      data.data.map((res: docentelist, index: number) => {
        const serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
         
          this.docenteLista.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<docentelist>(this.docenteLista);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });
  }



  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.docenteLista = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.docenteLista.slice();

    if (!sort.active || sort.direction === '') {
      this.docenteLista = data;
    } else {
      this.docenteLista= data.sort((a, b) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const aValue = (a as any)[sort.active];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    }
  }

  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    this.getTableData();
  }

  public PageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getTableData();
  }

  private calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    /* eslint no-var: off */
    for (var i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip: skip, limit: limit });
    }
  }

  onCheckboxChange(event: Event, docente: docentelist): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      // Si se marca el checkbox, agregar al array de seleccionados
      this.selectedDocentes.push(docente);
    } else {
      // Si se desmarca el checkbox, quitar del array de seleccionados
      this.selectedDocentes = this.selectedDocentes.filter(
        (d) => d !== docente
      );
    }
  }

}
