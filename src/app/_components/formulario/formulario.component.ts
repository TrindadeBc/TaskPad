import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnChanges {
  @Input() tarefa = { 
    nome: '', 
    descricao: '', 
    prazo: '', 
    status: 'não iniciada' 
  };
  @Output() salvarTarefa = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<void>();
  @Output() finalizar = new EventEmitter<any>();
  @Output() excluir = new EventEmitter<any>();
  @Output() iniciar = new EventEmitter<any>();

  editando = true;
  tarefaOriginal: any = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tarefa'] && changes['tarefa'].currentValue) {
      // Fazer backup da tarefa original
      this.tarefaOriginal = { ...changes['tarefa'].currentValue };
    }
  }

  formatarPrazo(event: any) {
    let valor = event.target.value.replace(/\D/g, '');
    
    if (valor.length <= 10) {
      let resultado = '';
      
      // Formatar DD/MM/AA HH:MM
      if (valor.length >= 1) {
        resultado = valor.substring(0, Math.min(2, valor.length));
      }
      if (valor.length >= 3) {
        resultado += '/' + valor.substring(2, Math.min(4, valor.length));
      }
      if (valor.length >= 5) {
        resultado += '/' + valor.substring(4, Math.min(6, valor.length));
      }
      if (valor.length >= 7) {
        resultado += ' ' + valor.substring(6, Math.min(8, valor.length));
      }
      if (valor.length >= 9) {
        resultado += ':' + valor.substring(8, Math.min(10, valor.length));
      }
      
      this.tarefa.prazo = resultado;
    }
  }

  salvar() {
    if (this.tarefa.nome.trim()) {
      this.editando = false;
      this.salvarTarefa.emit(this.tarefa);
      // Atualizar o backup após salvar
      this.tarefaOriginal = { ...this.tarefa };
    }
  }

  cancelarEdicao() {
    // Restaurar valores originais
    this.tarefa.nome = this.tarefaOriginal.nome;
    this.tarefa.descricao = this.tarefaOriginal.descricao;
    this.tarefa.prazo = this.tarefaOriginal.prazo;
    this.tarefa.status = this.tarefaOriginal.status;
    this.editando = false;
    this.cancelar.emit();
  }

  iniciarTarefa() {
    this.tarefa.status = 'iniciada';
    this.iniciar.emit(this.tarefa);
  }

  finalizarTarefa() {
    this.tarefa.status = 'finalizada';
    this.finalizar.emit(this.tarefa);
  }

  excluirTarefa() {
    this.excluir.emit(this.tarefa);
  }

  getStatusClass() {
    switch (this.tarefa.status) {
      case 'iniciada':
        return 'status-iniciada';
      case 'finalizada':
        return 'status-finalizada';
      default:
        return 'status-nao-iniciada';
    }
  }

  getStatusText() {
    switch (this.tarefa.status) {
      case 'iniciada':
        return 'Tarefa Iniciada';
      case 'finalizada':
        return 'Tarefa Finalizada';
      default:
        return 'Não Iniciada';
    }
  }
}
