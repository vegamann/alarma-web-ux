import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [{path:'login',component:LoginComponent},
  {path:'perfil',component:PerfilComponent},
  {path:'agenda', component:AgendaComponent},
{ path: '', pathMatch: 'full', redirectTo: 'login' },
{ path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
