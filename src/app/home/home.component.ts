import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	users;

  constructor(private userService: UsersService) { }

  ngOnInit() {
  	this.userService.all().subscribe(res => {
  		this.users = res;
  	});
  }

}
