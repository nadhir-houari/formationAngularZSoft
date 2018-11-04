import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 ngOnInit() {
  const observable = new Observable();
  const btn = document.querySelector('button');

  const observer = {
    next: function(value) {
      console.log(value);
    },
    error: function(value) {
      console.log(value);
    },
    complete: function() {
      console.log('Completed');
    }
  };

  // const mouseMoves = fromEvent(btn, 'click');
  // const subscription = mouseMoves.subscribe(observer);

  const obss = Observable.create(function(obs) {
    obs.next('A value');
    obs.next('A value');
    // obs.error('Error');
    obs.complete();
  });
  obss.subscribe(observer);
 }
}
