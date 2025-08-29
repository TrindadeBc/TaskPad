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

  editando = false;


  salvar() {
  if (this.tarefa.nome.trim()) {
    this.tarefa.editando = false; // finaliza modo edição
    this.salvarTarefa.emit(this.tarefa);
  }
}

  excluir() {
    this.excluirTarefa.emit(this.tarefa); // 🔹 emite para o pai excluir
  }

}

