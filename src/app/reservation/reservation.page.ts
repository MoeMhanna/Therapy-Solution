import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ProviderComponent} from '../provider-modal/provider.component';
import { SheetState} from 'ion-bottom-sheet';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  public isModalClosed = true;
  public sheetState = SheetState.Bottom;
  public provider = new ProviderComponent();
  constructor(private modalCtrl: ModalController) {
  }
  ngOnInit() {
  }



  async openModal(){
    const modal = await this.modalCtrl.create({
      component: ProviderComponent,
      initialBreakpoint:0.5,
      breakpoints:[0,0.6],
    });
    return await  modal.present();
  }

}
