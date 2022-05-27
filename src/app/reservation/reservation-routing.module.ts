import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationPage } from './reservation.page';
import {SlotTimeComponent} from '../slot-time/slot-time.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, SlotTimeComponent],
  declarations: [
    SlotTimeComponent
  ]
})
export class ReservationPageRoutingModule {}
