import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for ngStyle

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule for Angular directives like ngStyle
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']  // Correct property name
})
export class ButtonComponent implements OnInit {
  // Define 'color' and 'text' properties here
  @Input() text!: string;    // Default text

  @Input() color!: string;   // Default color

  @Output() btnClick= new  EventEmitter


  constructor() {}


  ngOnInit(): void {}

  
   // Define a single 'onClick' function
  onClick() {
    
   // console.log('Button Clicked');  

   this.btnClick.emit();

  }

}

