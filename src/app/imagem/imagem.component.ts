import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  nomeImagem: string = ''; // Inicialize a propriedade nomeImagem com um valor padrão vazio
  imagens: { nome: string, url: string }[] = [];

  inserirImagem() {
    const urlImagem = this.obterUrlImagem(this.nomeImagem);
    if (urlImagem !== '') {
      this.imagens.push({ nome: this.nomeImagem, url: urlImagem });
    }
  }  
  
  retirarImagem() {
    const indiceImagem = this.imagens.findIndex(imagem => imagem.nome === this.nomeImagem);
    if (indiceImagem !== -1) {
      this.imagens.splice(indiceImagem, 1);
    }
  }  

  obterUrlImagem(nome: string): string {
    switch (nome) {
      case '1':
        return 'assets/imagem1.jpg';
      case '2':
        return 'assets/imagem2.jpg';
      case '3':
        return 'assets/imagem3.jpg';
      case '4':
        return 'assets/imagem4.jpg';
      case '5':
        return 'assets/imagem5.jpg';
      default:
        return '';
    }
  }
  
}