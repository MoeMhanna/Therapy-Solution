import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-modal',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss'],
})
export class ProviderComponent implements OnInit {
  public isChanged = true;
  public providers  = [
    {
      // eslint-disable-next-line max-len
      img:'assets/images/moe.png',
      name:'Moe Mhanna',
      title:'Owner | PT,DPT,MS'
    },
    {
      // eslint-disable-next-line max-len
      img:'assets/images/roro.png',
      name:'Roro Mhanna',
      title:'Guess | Manager',
    },
  ];
  ngOnInit() {}

}
