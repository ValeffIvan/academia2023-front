import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/productos';
import { EditarProductoService } from 'src/app/services/editar-producto.service';
import { LoginService } from 'src/app/services/login.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.scss']
})
export class FormProductosComponent implements OnInit {
  
  formProducto= new FormGroup({
    codigo: new FormControl<string>('', Validators.required),
    barrio: new FormControl<string>('', Validators.required),
    precio: new FormControl<number>(0,Validators.min(0)),
    imagen: new FormControl<string>('', Validators.required),
  })
  validar = new FormControl('', [Validators.required]);
  
  constructor (private _loginService: LoginService,private service : ProductosService,  private router: Router, private servicioEditarProducto : EditarProductoService){
  }
  ngOnInit(): void {
    
    this.servicioEditarProducto.disparadorDeProducto.subscribe(data =>{
      this.updateData(data.data);
      this.formProducto.get('precio')?.disable();
      this.formProducto.get('codigo')?.disable();
    })
  }
  
  updateData (data:Producto)
  {
    this.formProducto.patchValue({
      codigo: data.codigo,
      precio: data.precio,
      imagen: data.imagen,
      barrio: data.barrio
    })
  }
  
  productoNuevo(){
    console.warn(this.formProducto.value)
    this.service.createProducts(<Producto>this.formProducto.value)
    this.formProducto.reset();
    this.router.navigateByUrl("/inicio")
  }
  
  crearProducto(){
    this.service.updateProduct (<Producto>this.formProducto.value)
    
  }
  
  changeCreate():void {
    this.router.navigateByUrl("/inicio")
  }
  logout(){
    this._loginService.logout();
  }
}
