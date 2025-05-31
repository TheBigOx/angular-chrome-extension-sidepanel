import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsRoutingModule } from './options-routing.module';

@Component({
  selector: 'app-options',
  imports: [CommonModule, OptionsRoutingModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})
export class OptionsComponent {

}
