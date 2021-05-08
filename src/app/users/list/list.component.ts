import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Datum } from '../../models/users';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:Datum[] = [];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( ({ data }) => this.users = [...data] );
  }

}
