import { Component } from '@angular/core';
import { filter, interval, map, of, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-rxjs-ng';

  stream$ = of(1, 2, 3, 4);

  isDisabled = false;
  people = [
    { candidateName: 'Max', experience: 3 },
    { candidateName: 'Andrew', experience: 1 },
    { candidateName: 'Anna', experience: 3 },
    { candidateName: 'Viktor', experience: 2 },
    { candidateName: 'Dima', experience: 4 },
  ];
  candidates: any[] = [];

  startInterval() {
    this.isDisabled = true;
    interval(1000)
      .pipe(
        take(this.people.length),
        filter((index) => this.people[index].experience >= 3),
        map((index) => this.people[index].candidateName)
      )
      .subscribe({
        next: (res) => {
          this.candidates.push(res);
        },
        error: (e) => console.error(e),
        complete: () => {
          this.isDisabled = false;
        },
      });
  }

  logSream() {
    this.stream$.subscribe((val) => console.log(val));
  }
}
