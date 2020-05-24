/**
 * Nossa classe Model de Tarefa
 */
export class Tarefa{
    constructor(
        public id?: number, // O '?' quer dizer que é opcional, não sendo obrigatório
        public nome?: string,
        public concluida?:boolean
    ){}

}