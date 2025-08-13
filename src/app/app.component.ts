import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { ButtonPrimaryComponent } from "./_components/button-primary/button-primary.component";
import { TarefaComponent } from './_components/tarefa/tarefa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from "./_components/formulario/formulario.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ButtonPrimaryComponent, TarefaComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskPad';
}
