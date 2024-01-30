import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  URL = 'api/users';

  getAllUsers() {
    return this.http.get(this.URL);
  }

  getUserById(id: number) {
    return this.http.get(`${this.URL}?id=${id}`);
  }

  addUser(payload: any) {
    return this.http.post(this.URL, payload);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }

  // v1
  // getUserByName(name: string): Observable<any> {
  //   return this.http.get(this.URL, {
  //     params: new HttpParams().set('userName', name),
  //   });
  // }

  // v2
  // getUserByName(name: string): Observable<any> {
  //   const httpParams = new HttpParams({
  //     fromObject: {
  //       userName: name,
  //     },
  //   });
  //   return this.http.get(this.URL, {
  //     params: httpParams,
  //   });
  // }

  // v3
  getUserByName(name: string): Observable<any> {
    const httpParams = new HttpParams({
      fromString: `userName=${name}`,
    });
    //localhost:4200?userName=Max
    return this.http.get(this.URL, {
      params: httpParams,
    });
  }
}
