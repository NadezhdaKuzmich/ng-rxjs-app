import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService implements InMemoryDbService {
  constructor() {}

  createDb(): {} | Observable<{}> | Promise<{}> {
    let users = [
      { id: 1, userName: 'Max', email: 'user1@email.com' },
      { id: 2, userName: 'Pavel', email: 'user2@email.com' },
      { id: 3, userName: 'Anna', email: 'user3@email.com' },
      { id: 4, userName: 'Daniel', email: 'user4@email.com' },
      { id: 5, userName: 'Taras', email: 'user5@email.com' },
    ];
    return {users};
  }
}
