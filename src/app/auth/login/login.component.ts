import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService, private router: Router) {
    this.setMessage();
  }

  ngOnInit(): void {}

  setMessage(): void {
    this.message = 'Logged ' + this.authService.isLoggedIn ? 'In' : 'Out';
  }

  login(): void {
    this.message = 'Trying to login...';

    this.authService.login().subscribe(() => {
      this.setMessage();

      if (this.authService.isLoggedIn) {
        this.router.navigate(['/admin']);
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.setMessage();
  }
}
