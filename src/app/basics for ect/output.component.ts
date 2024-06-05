import { Component, EventEmitter, output } from "@angular/core"
import { Output } from "@angular/core"

@Component({
  standalone: true, 
  selector: 'output-component',
  template: `
    <button (click)="emmitEvent()">click here to emit a hourse</button>
  `
})
export class OutputComponent{
  @Output() showHourseEvent = new EventEmitter<string>();
  emmitEvent(){
    this.showHourseEvent.emit('🐢');
  }
}
