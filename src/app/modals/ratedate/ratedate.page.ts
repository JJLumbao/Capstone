import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-ratedate',
  templateUrl: './ratedate.page.html',
  styleUrls: ['./ratedate.page.scss'],
})
export class RatedatePage implements OnInit {
  selected;
  @Input() selectedDate: string;
  constructor(private modalCtrl: ModalController, private navParams: NavParams) {
    this.selected = navParams.get('selectedDate');
   }
  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }
}
