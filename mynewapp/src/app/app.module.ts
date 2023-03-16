import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgendaModule } from './agenda/agenda.module';
import { AlarmasComponent } from './alarmas/alarmas.component';
import { AlarmasModule } from './alarmas/alarmas.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { PerfilModule } from './perfil/perfil.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfilModule,
    LoginModule,
    AgendaModule,
    AlarmasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
