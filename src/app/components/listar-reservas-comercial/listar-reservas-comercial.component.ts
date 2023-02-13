import { Component, ViewChild } from '@angular/core';
import { Reservas } from 'src/app/models/reservas';
import { ReservasService } from 'src/app/services/reservas.service';


@Component({
  selector: 'app-listar-reservas-comercial',
  templateUrl: './listar-reservas-comercial.component.html',
  styleUrls: ['./listar-reservas-comercial.component.scss']
})
export class ListarReservasComercialComponent {

  reservasList: Reservas[]=[];
  displayedColumns: string[] = ['#', 'Cliente', 'ID vendedor', 'Estado'];
  reservasListAux:Reservas[]=[];
  clientesList:string []= [];
  @ViewChild('clienteseleccionado') clienteseleccionado!: string;
  
  constructor (private service : ReservasService){

  }
  ngOnInit(){
    this.service.getReservas().subscribe(
      data => {
        this.reservasListAux = data
      }
    )

    this.reservasListAux.forEach(item => {
      if (!this.clientesList.includes(item.cliente))
      {this.clientesList.push(item.cliente)}
    })
  }

  changeclient(){
    this.reservasListAux.forEach(item => {
      if (item.cliente==this.clienteseleccionado)
        this.reservasList.push(item)
    } )
  }
}
