export class Lancamento {
    id: number;
    hora_lancamento: string;
    id_foteba_atleta: number;
    valor: number;
    id_foteba_lancamento_motivo: number;
    automatico: string;
    created_at: string;
    updated_at: string;
    motivo: {
        id: number;
        descricao: string;
        ativo: number;
        created_at: string;
        updated_at: string;
    };
}
