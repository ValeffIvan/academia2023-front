import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/productos';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  baseUrl = environment.apiUrl+'/Producto'
  
  constructor(private http:HttpClient) { }
  
  getProducto(): Observable<Array<Producto>> {
    return this.http.get<Array<Producto>>(this.baseUrl+'/GetProducts') as Observable<Producto[]>
  }
  
  createProducts(Product: Producto) {
    return this.http.post('https://localhost:7194/api/Producto/PostProducts',Product).subscribe(res => {
    console.log(Product);})
  }
  
  updateProduct (Product:Producto)
  {  
    this.http.put(this.baseUrl+'PutProducts',Product)
  }
  
  deleteProduct(id :number)
  {
    this.http.delete(this.baseUrl+'/DeleteProducts'+id).subscribe(res=>{
      console.log(res);
    })
  }
}
