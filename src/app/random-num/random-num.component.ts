import { Component, inject } from '@angular/core';
import { Subject, switchMap, shareReplay, delay } from 'rxjs';
import { RandomNumService } from './services/random-num.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-random-num',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './random-num.component.html',
  styleUrl: './random-num.component.scss'
})
export class RandomNumComponent {
  private readonly updateTriggered$ = new Subject<void>();

  private readonly randomNumService = inject(RandomNumService);

  private readonly currentNum$ = this.updateTriggered$.pipe(
    switchMap(() => this.randomNumService.getRandomNum()),
    shareReplay()
  );

  readonly firstStream$ = this.currentNum$.pipe(delay(1000));
  readonly secondStream$ = this.currentNum$.pipe(delay(2000));
  readonly thirdStream$ = this.currentNum$.pipe(delay(3000));

  getRandomNum(): void {
    this.updateTriggered$.next();
  }
}
