import { Component, OnInit } from '@angular/core';
import { getUserLocalStorage, removeUserLocalStorage } from '../localstorage/userlocalstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent implements OnInit {

  user: any
  constructor(private router: Router) {

  }

  public isUserLoggedIn: boolean | undefined;


  ngOnInit(): void {
    this.user = getUserLocalStorage('user');
    this.user = this.user.user
    // this.isUserLoggedIn = user !== null
    console.log(this.user);
  }

  public logout() {
    removeUserLocalStorage('user')
    this.router.navigate(['/login']);
  }

}
