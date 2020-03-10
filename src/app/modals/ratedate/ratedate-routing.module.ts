import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatedatePage } from './ratedate.page';

const routes: Routes = [
  {
    path: '',
    component: RatedatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatedatePageRoutingModule {}
