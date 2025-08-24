import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() novaTarefa = new EventEmitter<void>();
  
  menuExpandido = false;

  expandirMenu() {
    this.menuExpandido = true;
  }

  recolherMenu() {
    this.menuExpandido = false;
  }

  onNovaTarefa() {
    this.novaTarefa.emit();
  }
}
