import { Component, ViewChild } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Reservas } from 'src/app/models/reservas';
import { Task } from 'src/app/models/reservas-filtro';
import { ReservasService } from 'src/app/services/reservas.service';



@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styleUrls: ['./listar-reservas.component.scss']
})
export class ListarReservasComponent {
    
  //Data para la lista
  reservasList: Reservas[]=[];
  displayedColumns: string[] = ['#', 'Cliente', 'ID vendedor', 'Estado', 'solicitar', 'negar'];
  reservasListAux:Reservas[]=[];
  clientesList:string []= [];
  @ViewChild(MatTable) table!: MatTable<any>;
  
  constructor (private service : ReservasService, private router: Router){
    
  }
  ngOnInit(){    
    this.service.getReservas().subscribe( (data:Reservas[]) => {
      this.reservasList = data; this.filtrarReservas();this.cargarClientes();
    })
  }
  
  filtrarReservas(){
    this.reservasList = this.reservasList.filter(reserva => reserva.estado==1)
  }

  //Cargar filtro de cliente
  cargarClientes():void {
    for (let x of this.reservasList)
    {
      if (!this.clientesList.includes(x.cliente))
      {this.clientesList.push(x.cliente)}
    }
    this.clientesList.push('Todas las reservas')
  }
  
  //Cargar lista con filtro de clientes
  selectedValue(event: MatSelectChange) {
    this.reiniciarLista();
    for (let x of this.reservasListAux) {
      if (x.cliente==event.value){
        this.reservasList.push(x);
      }
      if (event.value==='Todas las reservas')
      {
        this.reservasList = this.reservasListAux
      }
    }
  }
  
  //Actualizar la lista
  updateTable():void{
    this.table.renderRows();
  }
  
  //Reiniciar la lista
  reiniciarLista()
  {
    if (this.reservasListAux.length==0) {this.reservasListAux = this.reservasList;}
    this.reservasList=[];
  }
  
  //Funciones para cancelar reservas  
  cancelarReserva(id:number){
    this.service.changeState(id,3)
    this.updateTable();
  }

  solicitarReserva(id:number){
    this.service.changeState(id,2)
    this.updateTable();
  }

  //Cambiar al componente para cargar una reserva
  changeComponent(){
    this.router.navigateByUrl("/cargarReserva")
  }


  //Boton actualizar
  actualizar(){
    this.updateTable()
  }
}