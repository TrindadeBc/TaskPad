export interface Tarefa {
  id?: number;          // opcional, pois o backend pode gerar
  nome: string;
  descricao: string;
  criadoEm?: Date;      // útil para ordenar
  status?: boolean;  // campo extra para marcar finalização
}
