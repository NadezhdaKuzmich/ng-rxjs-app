import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, interval, map, of, take } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-rxjs-ng';
  constructor(private dataService: DataService) {}

  @ViewChild('input', { static: false }) input: ElementRef | undefined;

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

  logDataFromService() {
    this.dataService.getData().subscribe((val) => console.log(val));
  }

  searchDataInput() {
    const minLength = 4;
    fromEvent(this.input?.nativeElement, 'input')
      .pipe(
        map(() => this.input?.nativeElement.value),
        filter((value) => !!value && value.length >= minLength),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((value) => console.log(value));
  }
}
