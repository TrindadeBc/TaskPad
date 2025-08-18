export interface Tarefa {
  id?: number;          // opcional, pois o backend pode gerar
  nome: string;
  descricao: string;
  concluida?: boolean;  // campo extra para marcar finalização
  criadoEm?: Date;      // útil para ordenar
}
