import { Component } from '@angular/core';
import { RandomNumComponent } from './random-num/random-num.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RandomNumComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = 'nexign_task';
}
