import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikedRoutingModule } from './liked-routing.module';

@Component({
  selector: 'app-liked',
  imports: [CommonModule, LikedRoutingModule],
  templateUrl: './liked.component.html',
  styleUrl: './liked.component.scss'
})
export class LikedComponent {

}
