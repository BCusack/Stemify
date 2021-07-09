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
  username: string | undefined;
  password: string | undefined;
  showSpinner = false;
  ngOnInit(): void {
  }
  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate([""]);
    } else {
      alert("Invalid credentials");
    }
  }
}
