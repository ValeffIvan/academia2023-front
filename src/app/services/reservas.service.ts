import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroment';
import { Producto } from '../models/productos';
import { Reservas } from '../models/reservas';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  baseUrl:string = environment.apiUrl+'/Reserva'

  constructor(private http:HttpClient) { }

  getReservas(): Observable<Array<Reservas>> {
    return this.http.get<Reservas[]>(this.baseUrl+'/GetReservas')
  }

  createReservas(Reserva: {idReservas: number, cliente: string, idVendedor: string, estado: number}){
    this.http.post(this.baseUrl='/PostProducts',Reserva).subscribe((res)=>{
      console.log(res);
    })
  }
  
  updateReservas (Reserva:Reservas)
  {
    this.http.put(this.baseUrl+'/PutReserva',Reserva).subscribe(data=>{
      console.log(data);
    })
  }

  deleteProduct(id :number)
  {
    this.http.delete(this.baseUrl+'/DeleteReserva'+id).subscribe(data=>{
      console.log(data);
    });
  }


  changeState(id: number, estado:number)
  {
    //despues del estado, el '' esta vacio para que funcione. Salta error porque el servidor no sabe que hacer 
    //con esa variable vacia, pero el metodo funciona
    this.http.put(this.baseUrl+'/CambiarEstado/'+id+'/'+estado,'').subscribe(data=>{
      console.log(data);
    })
  }
}
