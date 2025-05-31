import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpRoutingModule } from './help-routing.module';

@Component({
  selector: 'app-help',
  imports: [CommonModule, HelpRoutingModule],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss'
})
export class HelpComponent {

}
