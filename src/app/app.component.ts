import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// declare var $: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'fedpos-frontend';

  constructor() { }

  ngAfterViewInit(): void {
    // jQuery code to be executed after the view has initialized
    document.addEventListener('DOMContentLoaded', (event) => {
      
    });
  }
}



