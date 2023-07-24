import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from '../services/user.service';
import { getUserLocalStorage, setUserLocalStorage, removeUserLocalStorage } from '../localstorage/userlocalstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]

})
export class LoginComponent {

  submitted = false;

  form = this.formBuilder.group(
    {

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    }

  );
  constructor(private formBuilder: FormBuilder, private userService: UserService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
  }


  login(f: FormGroupDirective) {
    this.submitted = true;
    const loader: any = document.getElementById('localLoader');
    const innerText: any = document.getElementById('innerText');
    loader.style.display = 'block';
    innerText.style.display = 'none';
    const user = { ...f.value, role: "admin" }

    console.log(user);
    this.userService.login(user).subscribe(
      (data) => {
        this.submitted = false;
        loader.style.display = 'none';
        innerText.style.display = 'block';
        console.log(data);
        if (data.success === false) {
          this.messageService.add({
            icon: "warn",
            severity: "warn",
            summary: "warn",
            detail: data.message,
            life: 5000,
          });
          return;

        } else {

          this.messageService.add({
            icon: "success",
            severity: "success",
            summary: "success",
            detail: data.message,
            life: 5000,
          });
          setUserLocalStorage("user", data)
          this.router.navigate(['/dashboard']);
          return;
        }

      }
    )

  }



}
