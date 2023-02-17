import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/productos';
import { Reservas } from 'src/app/models/reservas';
import { LoginService } from 'src/app/services/login.service';
import { ProductosService } from 'src/app/services/productos.service';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-form-reservas',
  templateUrl: './form-reservas.component.html',
  styleUrls: ['./form-reservas.component.scss']
})
export class FormReservasComponent implements OnInit{
  
  formReserva= new FormGroup({
    cliente: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    idVendedor: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    producto:  new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
  })
  validar = new FormControl('', [Validators.required]);
  productos: Producto[]=[]
  productosAux: Producto[]=[]
  productoAux!: Producto;

  constructor(private service : ReservasService, private serviceProducto : ProductosService, private router: Router, private _loginService: LoginService){
    
  }
  ngOnInit(): void {
    this.serviceProducto.getProducto().subscribe((data:Producto[]) => {
      this.productos = data; this.cargarProductos()
    }) 
  }

  //carga los productos disponibles
  cargarProductos(){
    this.productos.forEach(element => {
      if (element.estado===1){
        this.productosAux.push(element)
      }
    });
  };
  
  onProductoSeleccionado(event: any){
    this.productoAux=event.value
  }
  crearReserva(){
    const reservaNueva:Reservas = {
      idVendedor: this.formReserva.get('idVendedor')!.value.toLowerCase(),
      cliente: this.formReserva.get('cliente')!.value,
      idReservas: 0,
      estado: 0
    }
    console.log(this.productoAux)
    this.service.crearReserva(reservaNueva,this.productoAux)
    this.router.navigateByUrl("/inicio")
  }
  
  changeCreate(){
    this.router.navigateByUrl("/inicio")
  }
 
  logout(){
    this._loginService.logout();
  }
}
