import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  //public user: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.user = Security.getUser();
  }

  public logout() {
    //Security.clear();
    //this.router.navigate(['/login']);
  }
}
