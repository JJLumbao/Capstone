import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatehistoryPageRoutingModule } from './datehistory-routing.module';

import { DatehistoryPage } from './datehistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatehistoryPageRoutingModule
  ],
  declarations: [DatehistoryPage]
})
export class DatehistoryPageModule {}
