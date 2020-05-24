/**
 * Classe de serviço, responsável pela regra de negócio do meu gerenciador.
 * @author Matheus Poda
 * @since 23/05/2020
 */
import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  /**
   * @description Método responsável pela listagem das tarefas
   * @returns Array de Tarefa;
   */
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas']; //Pega do aramzenamento do navegador
    return tarefas ? JSON.parse(tarefas) : []; //if simplificado
  }

  /**
   * @description Método responsável por cadastrar uma Tarefa
   * @return void
   */
  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * @description Método responsável por buscar um cadastro de tarefa 
   *            Id
   * @return Tarefa (Objeto)
   */
  buscarPorId(id: number): Tarefa{
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  /**
   * @description Método responsável por atualizar uma tarefa
   * @return void
   */
  atualizar(tarefa: Tarefa): void{
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if(tarefa.id === obj.id){
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * @description Métodos responsável por remover uma tarefa
   * @return void
   */
  remover(id:number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * @description Método que altera o status da tarefa;
   * @return void
   */
  alterarStatus(id:number): void{
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj,index,objs) => {
      if(id == obj.id){
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}

