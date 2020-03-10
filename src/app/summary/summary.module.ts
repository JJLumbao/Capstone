import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummaryPageRoutingModule } from './summary-routing.module';

import { SummaryPage } from './summary.page';
import { DatePickerModule } from 'ionic4-date-picker';
import { CalendarModule } from 'ion2-calendar';
import { DatehistoryPageModule } from '../modals/datehistory/datehistory.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummaryPageRoutingModule,
    DatePickerModule,
    CalendarModule,
    DatehistoryPageModule,
    IonicModule.forRoot()
  ],
  declarations: [SummaryPage]
})
export class SummaryPageModule {}