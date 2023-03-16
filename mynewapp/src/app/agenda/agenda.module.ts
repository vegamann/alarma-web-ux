import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[AgendaComponent],
  declarations: [AgendaComponent]
})
export class AgendaModule { }
