import { TestBed } from '@angular/core/testing';
//import { of } from 'rxjs';

import { UsersService } from './users.service';

describe('UsersService', () => {
	let usersService: UsersService;

  beforeEach(() => { 
  	TestBed.configureTestingModule({
  		providers: [UsersService]
  	});
  	usersService = TestBed.get(UsersService);
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  //Add tests for all() method
  describe('all', () => {
  	it('should return a collection of users', () => {
  		const userResponse = [
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

  		/*const userResponse = [
  			{
				id: '1',
				username: 'Luke',
				role: 'Developer'
			},
			{
				id: '2',
				username: 'Leia',
				role: 'Designer'
			}
  		];*/
  		
  		let response;
  		//spyOn(usersService, 'all').and.returnValue(of(userResponse));
  		usersService.all().subscribe(res => {
  			response = res;
  		});

  		expect(response).toEqual(userResponse);
  	});
  });

});
