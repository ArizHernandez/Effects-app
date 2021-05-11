import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';

import { loadUsersAction } from '../../store/actions/users.actions';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:UserModel[] = [];
  loading:boolean = false;
  error:any;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('users').subscribe( ({ users, loading, error }) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    });

    this.store.dispatch( loadUsersAction() );
  }

}
