import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  isAdmin = false;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
   this.isLogged = this.tokenService.isLogged();
   this.isAdmin = this.tokenService.isAdmin();
  
   
   $('.js-scroll-trigger').on('click',
   function(): void
   {
     $('.navbar-collapse').toggle();
   }
 );
 $('.nav').on('click',
 function(): void
 {
   $('.navbar-collapse').toggle();
 }
);
  }

  onLogOut(): void {
    this.tokenService.logOut();
  };

   
  }
