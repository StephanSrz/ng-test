import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
  show:boolean = true;
  age:string = "";

  changeToFalse(){
    this.show = false;
  }
  changeToTrue(){
    this.show = true;
  }
}
