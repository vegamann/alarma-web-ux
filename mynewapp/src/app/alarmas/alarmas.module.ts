import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmasComponent } from './alarmas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[AlarmasComponent],
  declarations: [AlarmasComponent]
})
export class AlarmasModule { }
