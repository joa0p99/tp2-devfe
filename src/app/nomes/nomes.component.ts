import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nomes',
  templateUrl: './nomes.component.html',
  styleUrls: ['./nomes.component.css']
})
export class NomesComponent implements OnInit {
  private baseUrl = 'http://localhost:4201';
  nomes: any[] = [];
  novoNome: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.carregarNomes();
  }

  carregarNomes() {
    this.http.get<any[]>(`${this.baseUrl}/nomes`).subscribe(
      response => {
        this.nomes = response;
      },
      error => {
        console.log('Erro ao carregar os nomes:', error);
      }
    );
  }

  inserirNome() {
    const novoNome = { nome: this.novoNome };

    this.http.post(`${this.baseUrl}/nomes`, novoNome).subscribe(
      () => {
        this.carregarNomes();
        this.novoNome = ''; // Limpa o campo de texto
      },
      error => {
        console.log('Erro ao inserir o nome:', error);
      }
    );
  }

  removerNome(nome: string) {
    this.http.delete(`${this.baseUrl}/nomes/${nome}`).subscribe(
      () => {
        this.carregarNomes();
      },
      error => {
        console.log('Erro ao remover o nome:', error);
      }
    );
  }
}