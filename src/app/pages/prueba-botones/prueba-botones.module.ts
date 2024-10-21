import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaBotonesPageRoutingModule } from './prueba-botones-routing.module';

import { PruebaBotonesPage } from './prueba-botones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaBotonesPageRoutingModule
  ],
  declarations: [PruebaBotonesPage]
})
export class PruebaBotonesPageModule {}
