import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxComponent } from './parallax.component';
import { ParallaxRowComponent } from './parallax-row/parallax-row.component';

@NgModule({
  declarations: [ParallaxComponent, ParallaxRowComponent],
  imports: [
    CommonModule
  ],
  exports: [ParallaxComponent, ParallaxRowComponent]
})
export class ParallaxModule { }
