import { Component } from '@angular/core';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  enviado = false;
  animarIcono = false;

  constructor() {}

  enviarCorreo() {
    this.enviado = false;
    this.animarIcono = true;

    setTimeout(() => {
      this.animarIcono = false;
      this.enviado = true;
    }, 2000);
  }
}
