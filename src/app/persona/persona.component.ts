import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../service/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from '../models/persona';
import * as awesom from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  persona: Persona = null;
  isAdmin = false;

  //template
  mapMarker: any;
  building:any;
  mobile:any;
  email:any;
  birthday:any;
  badge:any;
  home:any;

  constructor(
    private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }
 

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
        this.mapMarker=awesom.faMapMarker;
    
        //template
        this.building=awesom.faCity;
        this.email=awesom.faMailBulk;
        this.mobile=awesom.faMobile;
        this.birthday=awesom.faBirthdayCake;
        this.badge=awesom.faGraduationCap;
        this.home=awesom.faLaptopHouse;
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }

}
