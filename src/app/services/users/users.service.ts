import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
	users: Array<object> = [
		{
			id: '1',
			name: 'Luke',
			email: 'luke@mail.com'
		},
		{
			id: '2',
			name: 'Leia',
			email: 'leia@mail.com'
		},
		{
			id: '3',
			name: 'Jesse',
			email: 'jesse@mail.com'
		}
	];

  constructor() { }

  all(): Observable<Array<object>> {
  	return of(this.users);
  }
}
