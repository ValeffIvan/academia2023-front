import { Component } from '@angular/core';
import { Producto } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-listar-productos-vendedor',
  templateUrl: './listar-productos-vendedor.component.html',
  styleUrls: ['./listar-productos-vendedor.component.scss']
})
export class ListarProductosVendedorComponent {

  private producto:Producto | undefined;
  prdoctList: any = {};

  constructor (private service : ProductosService){

  }

  ngOnInit()
  {
    this.service.getProducto().subscribe(productoList =>{
      this.prdoctList = productoList
    })
  }
}
