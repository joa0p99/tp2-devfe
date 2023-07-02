import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe o módulo FormsModule
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImagemComponent } from './imagem/imagem.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { NomesComponent } from './nomes/nomes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImagemComponent,
    DetalhesComponent,
    NomesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
