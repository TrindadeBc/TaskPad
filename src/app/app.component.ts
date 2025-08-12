import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { ButtonPrimaryComponent } from "./_components/button-primary/button-primary.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ButtonPrimaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskPad';
}
