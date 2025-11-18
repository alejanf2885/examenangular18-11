import { MarcaComponent } from './components/marca-component/marca-component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { ComprasComponent } from './components/compras-component/compras-component';
import { ComprarComponent } from './components/comprar-component/comprar-component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'compras', component: ComprasComponent},
  {path:'comprar', component: ComprarComponent},
  {path: 'cubos/marca/:marca', component: MarcaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
