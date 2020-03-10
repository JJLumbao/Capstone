import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatehistoryPage } from './datehistory.page';

const routes: Routes = [
  {
    path: '',
    component: DatehistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatehistoryPageRoutingModule {}
