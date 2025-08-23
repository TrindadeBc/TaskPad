import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonPrimaryComponent } from "../button-primary/button-primary.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ButtonPrimaryComponent, CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @Input() tarefa = { nome: '', descricao: '' };
  @Output() salvarTarefa = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<void>();

  editando = true;

  salvar() {
    if (this.tarefa.nome.trim()) {
      this.editando = false;
      this.salvarTarefa.emit(this.tarefa);
    }
  }    

}
