import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { ButtonPrimaryComponent } from "./_components/button-primary/button-primary.component";
import { TarefaComponent } from './_components/tarefa/tarefa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from "./_components/formulario/formulario.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ButtonPrimaryComponent, TarefaComponent, FormularioComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskPad';

  tarefas: any[] = [];

  novaTarefa() {
    this.tarefas.push({ nome: '', descricao: '' });
  }

  atualizarTarefa(tarefa: any) {
    // Futuramente poderia salvar no backend
  }

  removerTarefa(tarefa: any) {
    const index = this.tarefas.indexOf(tarefa);
    if (index > -1) {
      this.tarefas.splice(index, 1);
    }
  }
}
