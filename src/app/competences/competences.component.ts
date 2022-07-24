import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})


export class CompetencesComponent implements OnInit {

  isAdmin = false;

  constructor(
    private personaService: PersonaService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) {
  
  }

  ngOnInit(): void {
    this.isAdmin = this.tokenService.isAdmin();
}
  }

    
    
  
