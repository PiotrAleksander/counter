import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState } from './../../models';
import { incrementCount, decrementCount, resetCount } from 'src/store/count';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.pipe(select('count'));
  }

  onIncrementClick(): void {
    this.store.dispatch(incrementCount());
  }

  onDecrementClick(): void {
    this.store.dispatch(decrementCount());
  }

  onResetClick(): void {
    this.store.dispatch(resetCount());
  }
}
