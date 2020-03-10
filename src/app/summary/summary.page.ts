import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment.js'
import { CalendarModalOptions } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { DatehistoryPage } from '../modals/datehistory/datehistory.page';
import { HttpClient } from '@angular/common/http';

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

  users = []; 
  page = 0;
  maximumPages=3;

  constructor(public modalController: ModalController, private http: HttpClient) {
    this.loadUsers();
   }

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

  loadUsers(event?) {
    this.http.get('https://randomuser.me/api/?results=20&page=${this.page}')
    .subscribe(res => {
      console.log(res);
      this.users = this.users.concat(res['results']);

      if(event) {
        event.target.complete();
      }
    });
  }
  // loadMore(event) {
  //   this.page++;
  //   this.loadUsers(event);

  //   if (this.page === this.maximumPages){
  //     event.target.disabled = true;
  //   }
  // }

}
