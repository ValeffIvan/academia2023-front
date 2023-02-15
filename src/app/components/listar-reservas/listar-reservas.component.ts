import { Component, ViewChild } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatTable } from '@angular/material/table';
import { Reservas } from 'src/app/models/reservas';
import { Task } from 'src/app/models/reservas-filtro';
import { ReservasService } from 'src/app/services/reservas.service';



@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styleUrls: ['./listar-reservas.component.scss']
})
export class ListarReservasComponent {

  //Filtro
  task: Task = {
    name: 'Estado',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Aprobada', completed: false, color: 'primary'},
      {name: 'Solicitada', completed: false, color: 'primary'},
      {name: 'Rechazada', completed: false, color: 'primary'},
      {name: 'Aprobada', completed: false, color: 'primary'}
    ],
  };
  allComplete: boolean = false;

  //Data para la lista
  reservasList: Reservas[]=[];
  displayedColumns: string[] = ['#', 'Cliente', 'ID vendedor', 'Estado', 'aceptar', 'negar'];
  reservasListAux:Reservas[]=[];
  clientesList:string []= [];
  @ViewChild(MatTable) table!: MatTable<any>;
  


  constructor (private service : ReservasService){

  }
  ngOnInit(){
    this.getReserva();
  }

  //Obtener reservas
  getReserva():void{
     this.service.getReservas().subscribe(
        (data:Reservas[]) => {
          this.reservasList = data; this.cargarClientes();
          console.log(data);
       }
     )
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
    this.updateTable();
  }

  //Actualizar la lista
  updateTable():void{
    this.table.renderRows();
  }

  //Reiniciar la lista
  reiniciarLista()
  {
    if (this.reservasListAux.length==0) {
      this.reservasListAux = this.reservasList;}
      this.reservasList=[];
  }

  //Funciones del filtro
  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
  updateOne(){
   /* this.reiniciarLista();
    let filtro: Task[]
    for (Task x in this.task.subtasks)
    {
      if (x.completed = true)
    }
    this.task.subtasks?.forEach(t =>()
      if (t.completed = true)
      {

      });

      for (let x of this.reservasListAux) {
        if (x.estado==filtro){
          this.reservasList.push(x);
        }
        if (event.value==='Todas las reservas')
        {
          this.reservasList = this.reservasListAux
        }
      }
      this.updateTable();
*/
  }

  aprobarReserva(id:number){
    this.service.changeState(id,4)
    this.updateTable();
  }

  rechazarReserva(id:number){
    this.service.changeState(id,5)
    this.updateTable();
  }
}