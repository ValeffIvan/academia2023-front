import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/productos';
import { EditarProductoService } from 'src/app/services/editar-producto.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent implements OnInit{
  
  estadoProducto:number | undefined;
  productoActualizado!: Producto;
  dataSource = new MatTableDataSource <Producto>();
  displayedColumns: string[] = ['#','Codigo', 'Barrio', 'Precio', 'imagen', 'Estado', 'Modificar', 'Eliminar'];
  create:boolean=false;
  
  
  
  constructor (private service : ProductosService, private router: Router, private servicioEditarProducto : EditarProductoService){
    
  }
  ngOnInit(): void {
    this.listarProductos()
  }
  
  //Cargar la lista de productos
  listarProductos()
  {
    this.service.getProducto().subscribe((data:Producto[]) => {
      this.dataSource.data = data; 
    }) 
  }
  
  //Elimninar un producto
  eliminarProducto(element:Producto){
    this.service.deleteProduct(element.idProducto);
    this.listarProductos();
  }
  
  //Cambiar a componente para cargar productos
  changeCreate():void {
    this.router.navigateByUrl("/cargarPoducto")
  }
  
  //Editar un producto
  editarProducto(element:Producto){
    this.router.navigateByUrl("/cargarPoducto");
    this.servicioEditarProducto.disparadorDeProducto.emit({
      data: element
    })
  }
  actualizar(){

  }
}

