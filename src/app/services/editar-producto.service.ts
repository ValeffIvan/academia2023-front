import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EditarProductoService {
  @Output() disparadorDeProducto: EventEmitter<any> = new EventEmitter()
  constructor() { }
}
