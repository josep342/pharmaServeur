import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdhesionPage } from './adhesion.page';

const routes: Routes = [
  {
    path: '',
    component: AdhesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdhesionPageRoutingModule {}
