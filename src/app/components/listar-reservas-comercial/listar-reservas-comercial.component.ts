import { Component } from '@angular/core';
import { Reservas } from 'src/app/models/reservas';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-listar-reservas-comercial',
  templateUrl: './listar-reservas-comercial.component.html',
  styleUrls: ['./listar-reservas-comercial.component.scss']
})
export class ListarReservasComercialComponent {

  private producto:Reservas | undefined;
  prdoctList: Reservas[] | undefined;

  constructor (private service : ReservasService){

  }


}
