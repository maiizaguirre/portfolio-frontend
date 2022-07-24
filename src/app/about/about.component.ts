import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  persona: Persona;
  isAdmin = false;
  
  constructor(
    private personaService: PersonaService,
    private toastr: ToastrService,
    private tokenService: TokenService) { }
  
  ngOnInit() {

    this.verPersonas();   
    this.isAdmin = this.tokenService.isAdmin();

  }
 
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
