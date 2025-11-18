import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import CubosService from './service/CubosService';
import { MarcaComponent } from './components/marca-component/marca-component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import LoginService from './service/LoginService';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import UsuarioService from './service/UsuarioService';
import { ComprasComponent } from './components/compras-component/compras-component';
import ComprasService from './service/ComprasService';
import { ComprarComponent } from './components/comprar-component/comprar-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    MarcaComponent,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    ComprasComponent,
    ComprarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CubosService,
    LoginService,
    UsuarioService,
    ComprasService,
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
