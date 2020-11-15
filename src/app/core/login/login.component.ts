import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  error = false;
  showForm = false;
  loading = false;
  isLoggedIn = false;

  constructor(
    private loginSevice: LoginService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    if (this.localStorageService.get('authUser')) {
      this.username = this.localStorageService.get('authUser').username;
      this.isLoggedIn = true;
    }
  }
  logIn(): void {
    this.loading = true;
    this.loginSevice.login(this.username, this.password)
      .subscribe(
        (response) => {
          console.log('response received', response);
          this.error = false;
          this.loading = false;
          this.isLoggedIn = true;
          this.localStorageService.set('authUser', response);
        },
        (error) => {
          console.error('error caught in component');
          this.error = true;
          this.loading = false;
        },
      );
  }
  logOut(): void {
    this.isLoggedIn = false;
    this.localStorageService.remove('authUser');
  }
  toggleForm(): void {
    this.showForm = !this.showForm;
  }
}
