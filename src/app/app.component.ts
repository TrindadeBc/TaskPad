import { Component } from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { FormularioComponent } from "./_components/formulario/formulario.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FormularioComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskPad';

  tarefas: any[] = [];  //ngFor do HTML está lendo diretamente aqui!
  tarefasFinalizadas: any[] = [];

  novaTarefa() {
    this.tarefas.push({ 
      nome: '', 
      descricao: '', 
      prazo: '', 
      status: 'não iniciada' 
    });
  }

  atualizarTarefa(tarefa: any) {
    // Futuramente poderia salvar no backend
    this.ordenarTarefasPorPrazo();
  }

  iniciarTarefa(tarefa: any) {
    tarefa.status = 'iniciada';
    this.ordenarTarefasPorPrazo();
  }

  // Esta função chamada "removerTarefa" serve para remover uma tarefa específica da lista de tarefas.
  // Ela recebe como parâmetro a tarefa que deve ser removida.
  // Primeiro, ela procura o índice dessa tarefa dentro do array "tarefas".
  // Se encontrar (ou seja, o índice for maior que -1), ela remove a tarefa da lista usando o método splice.
  // Assim, a tarefa desaparece da lista exibida na tela.
  removerTarefa(tarefa: any) {
    const index = this.tarefas.indexOf(tarefa);
    if (index > -1) {
      this.tarefas.splice(index, 1);
    }
  }

  cancelarEdicao(tarefa: any) {
    // Apenas cancela a edição, não remove a tarefa
    // O componente de formulário já gerencia o estado de edição internamente
  }

  finalizarTarefa(tarefa: any) {
    const index = this.tarefas.indexOf(tarefa);
    if (index > -1) {
      tarefa.status = 'finalizada';
      this.tarefas.splice(index, 1);
      this.tarefasFinalizadas.push(tarefa);
    }
  }

  excluirTarefa(tarefa: any) {
    const index = this.tarefas.indexOf(tarefa);
    if (index > -1) {
      this.tarefas.splice(index, 1);
    }
  }

  ordenarTarefasPorPrazo() {
    this.tarefas.sort((a, b) => {
      if (!a.prazo && !b.prazo) return 0;
      if (!a.prazo) return 1;
      if (!b.prazo) return -1;
      
      const prazoA = this.converterPrazoParaTimestamp(a.prazo);
      const prazoB = this.converterPrazoParaTimestamp(b.prazo);
      
      return prazoA - prazoB;
    });
  }

  private converterPrazoParaTimestamp(prazo: string): number {
    if (!prazo) return 0;
    
    // Formato esperado: DD/MM/AA HH:MM
    const partes = prazo.split(' ');
    if (partes.length !== 2) return 0;
    
    const dataParte = partes[0]; // DD/MM/AA
    const horaParte = partes[1]; // HH:MM
    
    const [dia, mes, ano] = dataParte.split('/');
    const [horas, minutos] = horaParte.split(':');
    
    if (!dia || !mes || !ano || !horas || !minutos) return 0;
    
    // Converter para formato YYYY-MM-DD HH:MM
    const dataFormatada = `20${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')} ${horas.padStart(2, '0')}:${minutos.padStart(2, '0')}`;
    
    return new Date(dataFormatada).getTime();
  }
}
