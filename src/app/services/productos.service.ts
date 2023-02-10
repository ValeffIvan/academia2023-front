import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/productos';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseUrl:string = environment.apiUrl+'/Producto'

  constructor(private http:HttpClient) { }

  getProducto(): Observable<Array<Producto>> {
    return this.http.get<Array<Producto>>(this.baseUrl+'/GetProducts')
  }

  createProducts(Product: {idProducto: number, codigo: number, barrio: string, precio: number, enlaceImagen:string, estado:string}){
    this.http.post(this.baseUrl='/PostProducts',Product).subscribe((res)=>{
      console.log(res);
    })
  }

  updateProduct (Product:Producto)
  {
    this.http.put(this.baseUrl+'PutProducts',Product).subscribe(data=>{
      console.log(data);
    })
  }

  deleteProduct(id :number)
  {
    this.http.delete(this.baseUrl+'/DeleteProducts'+id).subscribe(data=>{
      console.log(data);
    });
  }
}
