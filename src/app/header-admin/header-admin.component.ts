import { Component, OnInit } from '@angular/core';
import { getUserLocalStorage, removeUserLocalStorage } from '../localstorage/userlocalstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  user: any
  //  isUserLoggedIn:boolean;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.user = getUserLocalStorage('user');
    this.user = this.user.user
    // this.isUserLoggedIn = user !== null
  }

  public logout() {
    this.router.navigate(['/login']);
    removeUserLocalStorage('user')
  }

}
