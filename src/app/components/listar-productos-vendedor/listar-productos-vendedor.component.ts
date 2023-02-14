import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-listar-productos-vendedor',
  templateUrl: './listar-productos-vendedor.component.html',
  styleUrls: ['./listar-productos-vendedor.component.scss']
})
export class ListarProductosVendedorComponent implements OnInit{
  
  formProducto= new FormGroup({
    codigo: new FormControl<string>('', Validators.required),
    barrio: new FormControl<string>('', Validators.required),
    precio: new FormControl<number>(0,Validators.min(0)),
    Imagen: new FormControl<string>('', Validators.required),
  })

  productoActualizado!: Producto;
  dataSource = new MatTableDataSource <Producto>();
  displayedColumns: string[] = ['#','Codigo', 'Barrio', 'Precio', 'Imagen', 'Estado', 'Modificar', 'Eliminar'];
  create:boolean=false;
  validar = new FormControl('', [Validators.required]);
  stateCode = true;
  statePrecio = true;

  constructor (private service : ProductosService){

  }
  ngOnInit(): void {
    this.service.getProducto().subscribe((data:Producto[]) => {
      this.dataSource.data = data; }
    ) 
  }

  changeCreate():void {
    this.create=!this.create
  }

  async eliminarProducto(element:Producto){
    this.service.deleteProduct(element.idProducto);
    this.ngOnInit();
  }

  productoNuevo(){
    console.warn(this.formProducto.value)
    this.service.createProducts(<Producto>this.formProducto.value)
    this.formProducto.reset();
  }

  editarProducto(element:Producto){
    this.changeCreate();
    this.stateCode = false;
    this.statePrecio = false;
    this.formProducto.patchValue({
      codigo: element.codigo,
      precio: element.precio,
      Imagen: element.Imagen,
      barrio: element.barrio,      
    });
  }

  cambiarProducto(){
    this.service.updateProduct (<Producto>this.formProducto.value)
  }
}
