import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/productos';
import { EditarProductoService } from 'src/app/services/editar-producto.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-listar-productos-vendedor',
  templateUrl: './listar-productos-vendedor.component.html',
  styleUrls: ['./listar-productos-vendedor.component.scss']
})
export class ListarProductosVendedorComponent implements OnInit{
  
  estadoProducto:number | undefined;
  productoActualizado!: Producto;
  dataSource = new MatTableDataSource <Producto>();
  displayedColumns: string[] = ['#','Codigo', 'Barrio', 'Precio', 'Imagen', 'Estado', 'Modificar', 'Eliminar'];
  create:boolean=false;

  

  constructor (private service : ProductosService, private router: Router, private servicioEditarProducto : EditarProductoService){
    
  }
  ngOnInit(): void {
    this.listarProductos()
  }

  listarProductos()
  {
    this.service.getProducto().subscribe((data:Producto[]) => {
      this.dataSource.data = data; }
    ) 
  }

  eliminarProducto(element:Producto){
    this.service.deleteProduct(element.idProducto);
    this.listarProductos();
  }

  changeCreate():void {
    this.router.navigateByUrl("/cargarPoducto")
  }

  editarProducto(element:Producto){
    this.router.navigateByUrl("/cargarPoducto");
    this.servicioEditarProducto.disparadorDeProducto.emit({
      data: element
    })
  };
}

