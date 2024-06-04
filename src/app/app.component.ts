import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentTestComponent } from './component-test/component-test.component'
import { IfelseComponent } from './ifelse/ifelse.component'
import { ForComponent } from './basics for ect/for.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentTestComponent, IfelseComponent, ForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'concepts';
  num = 5;
}
