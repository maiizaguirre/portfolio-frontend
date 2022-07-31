import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persona: Persona;
  isLogged = false;
  isAdmin = false;

  constructor(
    private personaService: PersonaService,
    private toastr: ToastrService,
    private tokenService: TokenService) { }

  ngOnInit() {
    this.verPersonas();   
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

  verPersonas(): void {
    this.personaService.verPersonas().subscribe(
      data => {
        this.persona = data[0];
      },
      err => {
        console.log(err);
      }
    );
  }
  }
