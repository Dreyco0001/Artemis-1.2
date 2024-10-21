import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-botones',
  templateUrl: './prueba-botones.page.html',
  styleUrls: ['./prueba-botones.page.scss'],
})
export class PruebaBotonesPage{

  constructor() { }
  
  deleted = false;
  showPaper = false;

  onDelete() {
    this.showPaper = true;

    const paper = document.querySelector('.paper') as HTMLElement;
    

    setTimeout(() => {
      paper.classList.add('paper-folded');
    }, 100); // Tiempo para mostrar el papel

    setTimeout(() => {
      this.deleted = true;
      const trashBin = document.querySelector('.trash-bin') as HTMLElement;
      trashBin.classList.add('show-trash');
    }, 600); // Tiempo para esperar la animación de doblado
  }

}
