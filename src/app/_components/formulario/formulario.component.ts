import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../_interfaces/tarefa';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @Input() tarefa!: Tarefa & { editando?: boolean };
  @Output() salvarTarefa = new EventEmitter<Tarefa>();
  @Output() cancelar = new EventEmitter<Tarefa>();
  @Output() excluirTarefa = new EventEmitter<Tarefa>();
  @Output() concluir = new EventEmitter<Tarefa>();

  concluirTarefa() {
    this.tarefa.status = true; // marca como concluída
    this.concluir.emit(this.tarefa);
  }

  editando = false;

  salvar() {
    if (this.tarefa.nome.trim()) {
      if (!this.tarefa.data) {
        // gera data em ISO (UTC)
        this.tarefa.data = new Date().toISOString();
      }

      this.tarefa.editando = false;
      this.salvarTarefa.emit(this.tarefa);
    }
  }


  excluir() {
    this.excluirTarefa.emit(this.tarefa); // 🔹 emite para o pai excluir
  }

}

