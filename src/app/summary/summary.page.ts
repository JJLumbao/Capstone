import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment.js'
import { CalendarModalOptions } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { DatehistoryPage } from '../modals/datehistory/datehistory.page';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  date
  datenow = moment().format('x')
  optionsRange: CalendarModalOptions = {
    canBackwardsSelected: true,

  };
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.date)
  }
  onChange(e) {
    console.log(moment(e._i).format('x'))
    if(moment(e._i).format('x')>this.datenow){
      console.log('do nothing')
      return
    }
    if(moment(e._i).format('x')<this.datenow){
      console.log('open date modal')
      this.presentModal(moment(e._i).format('MMMM Do YYYY'))
      return
    } else{
      console.log('open rate date modal')
      return
    }
  }

  async presentModal(d) {
    const modal = await this.modalController.create({
      component: DatehistoryPage,
      componentProps: {
        'selectedDate': d,
      }
    });
    return await modal.present();
  }
}
