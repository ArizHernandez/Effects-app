import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { loadUserAction } from '../../store/actions/user.actions';
import { UserModel } from '../../models/user.model';
import { AppState } from 'src/app/store/app.reducer';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:UserModel = { id: '1', first_name: '', last_name: '', email: '', avatar: ''};
  error:any = null;
  loading:boolean = false;

  constructor(
    private store:Store<AppState>,
    private route:ActivatedRoute,
    private location:Location
  ){ }

  ngOnInit(): void {
    this.store.select('user').subscribe( ({user, error, loading}) => {
      this.user = user;
      this.error = error;
      this.loading = loading
    })

    this.route.params.subscribe( ({ id }) => this.store.dispatch( loadUserAction({ id }) ))
  }

  backLastPage(){
    this.location.back();
  }

}
