import { Component } from "@angular/core";

@Component({
  selector: "for-component",
  standalone: true,
  template: `
  <p>FOR</p>
  @for(os of operatingSystems; track os.id){
    <p>{{os.name}}</p>
  }
  `,
  styles: ` p{color: red} `
})
export class ForComponent{
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}]
}