import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template:
  `<p>Este es el componente Dashboard {{loadState}}</p>
  <button (click)="clicked()">Finished</button>
  <input type="text" [(ngModel)]="loadState"/>`
})

export class DashboardComponent{
  loadState = 'loading';

  clicked(){
    this.loadState = 'finished';
  }
}
