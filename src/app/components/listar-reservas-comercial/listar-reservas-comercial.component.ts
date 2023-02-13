import { Component, ViewChild } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatTable } from '@angular/material/table';
import { Reservas } from 'src/app/models/reservas';
import { ReservasService } from 'src/app/services/reservas.service';


@Component({
  selector: 'app-listar-reservas-comercial',
  templateUrl: './listar-reservas-comercial.component.html',
  styleUrls: ['./listar-reservas-comercial.component.scss']
})
export class ListarReservasComercialComponent {

  reservasList: Reservas[]=[];
  displayedColumns: string[] = ['#', 'Cliente', 'ID vendedor', 'Estado', 'aceptar', 'negar', 'eliminar'];
  reservasListAux:Reservas[]=[];
  clientesList:string []= [];
  @ViewChild(MatTable) table!: MatTable<any>;
  
  constructor (private service : ReservasService){

  }
  ngOnInit(){
    this.getReserva();
  }

    getReserva():void{
     this.service.getReservas().subscribe(
        (data:Reservas[]) => {
          this.reservasListAux = data; this.cargarClientes();
       }
     )
   }  

   cargarClientes():void {
    for (let x of this.reservasListAux)
    {
      if (!this.clientesList.includes(x.cliente))
      {this.clientesList.push(x.cliente)}
    }
  }

  selectedValue(event: MatSelectChange) {
    this.reservasList =[];
    for (let x of this.reservasListAux) {
      if (x.cliente==event.value){
        this.reservasList.push(x);
      }
    }
    this.updateTable();
  }

  updateTable():void{
    this.table.renderRows();
  }

  aceptarReserva(){

  }
}