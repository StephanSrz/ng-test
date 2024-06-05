import { Component } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  standalone: true,
  selector: 'input-component',
  template: `
    <p>name father component {{name}}</p>
  `,

})
export class InputComponent{
  @Input() name = 'default name';
}