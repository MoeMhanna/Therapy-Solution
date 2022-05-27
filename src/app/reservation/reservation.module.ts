import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationPageRoutingModule } from './reservation-routing.module';

import { ReservationPage } from './reservation.page';
import {ProviderComponent} from '../provider-modal/provider.component';
import {IonBottomSheetModule} from 'ion-bottom-sheet';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationPageRoutingModule,
    IonBottomSheetModule
  ],
    declarations: [
      ReservationPage,
      ProviderComponent,
    ]
})
export class ReservationPageModule {}
