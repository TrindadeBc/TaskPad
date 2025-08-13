import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarefa',
  imports: [ReactiveFormsModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})

export class TarefaComponent {
  tarefaForm: FormGroup;
  tarefas: { nome: string; descricao: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.tarefaForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  adicionarTarefa() {
    if (this.tarefaForm.valid) {
      this.tarefas.push(this.tarefaForm.value);
      this.tarefaForm.reset(); // limpa os campos
    }
  }
}