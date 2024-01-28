import { Injectable } from '@angular/core';
import { delay, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getData() {
    let data = [];
    for (let i = 0; i < 7; i++) {
      data.push('List item ' + (i + 1));
    }
    return of(data).pipe(
      delay(1000),
      map((text) => {
        console.log('method map works');
        return text.concat('new content for list');
      }),
      delay(1000)
    );
  }
}
