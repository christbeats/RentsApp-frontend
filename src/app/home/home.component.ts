import { Component } from '@angular/core';
import { getUserLocalStorage,setUserLocalStorage,removeUserLocalStorage } from '../localstorage/userlocalstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public isUserLoggedIn:boolean;

  constructor(){
    const user = getUserLocalStorage('user');
    this.isUserLoggedIn = user !== null
}

}
