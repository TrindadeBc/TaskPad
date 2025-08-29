import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { FormularioComponent } from "./_components/formulario/formulario.component";
import { CommonModule } from '@angular/common';
import { TarefaService } from './_services/tarefa.service';
import { Tarefa } from './_interfaces/tarefa';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FormularioComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'taskPad';
  tarefas: Tarefa[] = [];
  constructor(private tarefaService: TarefaService){}

  ngOnInit(): void {
      this.carregarTarefas();
  }

  carregarTarefas() {
    this.tarefaService.listar().subscribe({
      next: (tarefas) => (this.tarefas = tarefas),
      error: (err) => console.error('Erro ao listar tarefas:', err)
    });
  }

  novaTarefa() {
  const nova: Tarefa = { nome: '', descricao: '', status: false };
  this.tarefaService.criar(nova).subscribe({
    next: (tarefaCriada) => {
      // marca que deve iniciar em edição
      (tarefaCriada as any).editando = true; 
      this.tarefas.push(tarefaCriada);
    },
    error: (err) => console.error('Erro ao criar tarefa:', err)
  });
}


  atualizarTarefa(tarefa: Tarefa) {
    if (!tarefa.id) return; // precisa de ID
    this.tarefaService.atualizar(tarefa).subscribe({
      next: (tarefaAtualizada) => {
        const index = this.tarefas.findIndex(t => t.id === tarefaAtualizada.id);
        if (index > -1) this.tarefas[index] = tarefaAtualizada;
      },
      error: (err) => console.error('Erro ao atualizar tarefa:', err)
    });
  }

  removerTarefa(tarefa: Tarefa) {
  const index = this.tarefas.indexOf(tarefa);
  if (index > -1) {
    this.tarefas.splice(index, 1);
    this.tarefaService.deletar(tarefa.id!).subscribe();
  }
}
}
