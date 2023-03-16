import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugaresComponent } from './lugares.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[LugaresComponent],
  declarations: [LugaresComponent]
})
export class LugaresModule { }
