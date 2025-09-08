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
    if (!this.tarefa.nome || !this.tarefa.descricao) return; // validação extra

    // gera data no fuso de Brasília (ISO sem Z)
    if (!this.tarefa.data) {
      const agora = new Date();
      this.tarefa.data = agora.toISOString(); // ou toLocaleString formatado
    }

    this.tarefa.editando = false;

    // 🔹 se não tem id, é nova → cria no backend
    if (!this.tarefa.id) {
      this.salvarTarefa.emit({ ...this.tarefa });
    } else {
      // 🔹 se já tem id, é edição → atualiza
      this.salvarTarefa.emit(this.tarefa);
    }
  }



  excluir() {
    this.excluirTarefa.emit(this.tarefa); // 🔹 emite para o pai excluir
  }

}

