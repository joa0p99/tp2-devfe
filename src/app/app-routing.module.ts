import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagemComponent } from './imagem/imagem.component';
import { NomesComponent } from './nomes/nomes.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imagem', component: ImagemComponent },
  { path: 'nomes', component: NomesComponent },
  { path: 'detalhes/:nome/:id', component: DetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
