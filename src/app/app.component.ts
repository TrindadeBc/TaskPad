import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { FormularioComponent } from "./_components/formulario/formulario.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FormularioComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskPad';

  tarefas: any[] = [];  //ngFor do HTML está lendo diretamente aqui!

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
