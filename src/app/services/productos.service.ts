import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/productos';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseUrl:string = environment.apiUrl

  constructor(private http:HttpClient) { }

  getProducto(): Observable<Array<Producto>> {
    return this.http.get<Array<Producto>>(this.baseUrl+'/Producto')
  }
}
