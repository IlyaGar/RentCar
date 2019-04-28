import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { OrderService } from 'src/app/order-management/services/order.service';

@Component({
  
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  users: User[];
  user: User;
  isSort: boolean = false;
  @Input() isUser: boolean;
  
  constructor(
    private userService: UserService,
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(u => this.users = u);
  } 

 sortTable(sort: string) {
    if(!this.isSort) {
      this.users.sort((a, b)=> a[sort].localeCompare(b[sort]));
      this.isSort = true;
    }
    else {
      this.users.sort((a, b)=> b[sort].localeCompare(a[sort]));
      this.isSort = false;
    }
  }

  sortTableId() {
    if(!this.isSort) {
      this.users.sort((a,b)=>a.UserId-b.UserId);
      this.isSort = true;
    }
    else {
      this.users.sort((a,b)=>b.UserId-a.UserId);
      this.isSort = false;
    }
  }

  onSelectUser(user: User){
    this.user = user;
    this.orderService.onSelectUser(user);
  }
}

