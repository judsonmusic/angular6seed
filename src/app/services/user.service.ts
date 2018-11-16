import { Injectable } from '@angular/core';
import { Router }      from '@angular/router';
import { Http, Headers } from '@angular/http';
import {AuthService} from "../services/auth.service";
import { Subject, Observable, of } from 'rxjs';


@Injectable()
export class UserService{

  userData:any;
  user= new Subject<boolean>();
  user$:Observable<any>;
  loggedIn = new Subject<boolean>();
  loggedIn$:Observable<any>;


  constructor(private http:Http, public authService:AuthService, public router:Router) {

    this.user = new Subject<boolean>();
    this.user$ = this.user.asObservable();
    this.loggedIn = new Subject<boolean>();
    this.loggedIn$ = this.loggedIn.asObservable();

  }

  getUser(){
      return this.user$;
  }

  
}
