import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: 'eventb-component',
  template: `
    <button (click)='clickEvent()'>click</button>
    <p>Welcome {{ name }}</p>
  `
})
export class EventBinding{
  name = 'anonymous'
  clickEvent(){
    this.name = 'user'
  }
}