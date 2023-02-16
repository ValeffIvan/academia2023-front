import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/productos';
import { Reservas } from 'src/app/models/reservas';
import { ProductosService } from 'src/app/services/productos.service';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-form-reservas',
  templateUrl: './form-reservas.component.html',
  styleUrls: ['./form-reservas.component.scss']
})
export class FormReservasComponent implements OnInit{
  
  formReserva= new FormGroup({
    cliente: new FormControl<string>('', Validators.required),
    idVendedor: new FormControl<string>('', Validators.required),
    producto:  new FormControl<string>('', Validators.required),
  })
  validar = new FormControl('', [Validators.required]);
  productos: Producto[]=[]
  productosAux: Producto[]=[]
  
  constructor(private service : ReservasService, private serviceProducto : ProductosService, private router: Router){
    
  }
  ngOnInit(): void {
    this.serviceProducto.getProducto().subscribe((data:Producto[]) => {
      this.productos = data; 
    }) 
  }
  /*
  cargarProductos(){
    for (let x in this.productosAux)
    {
      if (i.)
    }
    this.productosAux.forEach(element => {
      if (element.estado===1){
        this.productos.push(element)
      }
    });
  };
  */
  reservaNuevo(){
    
  }
  
  cambiarReserva(){
    this.service.crearReserva(<Reservas>this.formReserva.value)
    this.router.navigateByUrl("/reservas")
  }
  
  changeCreate(){
    this.router.navigateByUrl("/reservas")
  }
  
}
