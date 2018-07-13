export class Atleta {
    id: number;
    nome: string;
    apelido: string;
    ativo: number;
    login: string;
    senha: string;
    goleiro_fixo: number;
    machucado: number;
    avatar: {
        id: number
        imagem_url: string;
        thumb_url: string;
        id_dono: number;
        tipo_dono: string;
        updated_at: string;
        created_at: string;
    };
    lancamentos: {}[];
    get_images: {}[];
}