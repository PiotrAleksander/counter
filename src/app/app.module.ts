import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import countReducer from '../store/count';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, StoreModule.forRoot({ count: countReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
