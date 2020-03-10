import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-datehistory',
  templateUrl: './datehistory.page.html',
  styleUrls: ['./datehistory.page.scss'],
})
export class DatehistoryPage{
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
