import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';


@NgModule({
  imports: [
    CommonModule,

  ],
  exports:[PerfilComponent],
  declarations: [PerfilComponent]
})
export class PerfilModule { }
