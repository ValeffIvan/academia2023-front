import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss']
})
export class MensajeComponent {

  @Input() title: string = "";
  @Input() subTitle: string = "";
  @Input() icon: string = "";
  @Input() tipo: string = "";

}
