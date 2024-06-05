import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentTestComponent } from './component-test/component-test.component'
import { IfelseComponent } from './ifelse/ifelse.component'
import { ForComponent } from './basics for ect/for.component';
import { PropertyBinding } from './binding/propertyBinding.component';
import { EventBinding } from './binding/eventBinding.component';
import { InputComponent } from './basics for ect/input.component';
import { OutputComponent } from './basics for ect/output.component';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentTestComponent, IfelseComponent, ForComponent, PropertyBinding, EventBinding, InputComponent, OutputComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'concepts';
  num = 5;
}
