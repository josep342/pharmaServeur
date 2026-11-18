import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdhesionPageRoutingModule } from './adhesion-routing.module';

import { AdhesionPage } from './adhesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdhesionPageRoutingModule
  ],
  declarations: [AdhesionPage]
})
export class AdhesionPageModule {}
