import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }
  username!: string;
  password: string | undefined;
  showSpinner = false;
  ngOnInit(): void {
  }
  login(): void {
    this.authService.SignIn(this.username, this.password);
  }
  signUp(): void {
    this.authService.SignUp(this.username, this.password);
  }
}

