import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaBotonesPage } from './prueba-botones.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaBotonesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaBotonesPageRoutingModule {}
