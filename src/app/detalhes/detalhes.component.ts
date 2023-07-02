import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  nome: string = '';
  id: string = '';
  novoNome: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.nome = params['nome'];

    });
  }

  salvar() {
    const novoNome = this.novoNome.trim();
    
    if (novoNome !== '') {
      const id = this.id; // ID do nome atual que foi clicado
      this.http.put(`http://localhost:4201/nomes/${id}`, { nome: novoNome }).subscribe(
        () => {
          // Atualize o nome na variável this.nome
          this.nome = novoNome;
  
          // Redirecione para a página de nomes
          this.router.navigate(['/nomes']);
        },
        error => {
          console.log('Erro ao atualizar o nome:', error);
        }
      );
    }
  }

  cancelar() {
    this.router.navigate(['/nomes']);
  }
}
