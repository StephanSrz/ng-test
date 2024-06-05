import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: 'property-binding',
  template: `
    	<p [style.color]="color">Style binding</p>
  `
})
export class PropertyBinding{
  color = '#0f0';
}
