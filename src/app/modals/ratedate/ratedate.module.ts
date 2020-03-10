import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatedatePageRoutingModule } from './ratedate-routing.module';

import { RatedatePage } from './ratedate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatedatePageRoutingModule
  ],
  declarations: [RatedatePage]
})
export class RatedatePageModule {}
