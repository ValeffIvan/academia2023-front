import { HttpClient } from '@angular/common/http';
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
    this.http.put(this.baseUrl+'PutReserva',Reserva).subscribe(data=>{
      console.log(data);
    })
  }

  deleteProduct(id :number)
  {
    this.http.delete(this.baseUrl+'/DeleteReserva'+id).subscribe(data=>{
      console.log(data);
    });
  }
}
