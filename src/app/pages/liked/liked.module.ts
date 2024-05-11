import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikedRoutingModule } from './liked-routing.module';
import { LikedComponent } from './liked.component';


@NgModule({
  declarations: [
    LikedComponent
  ],
  imports: [
    CommonModule,
    LikedRoutingModule
  ]
})
export class LikedModule { }
