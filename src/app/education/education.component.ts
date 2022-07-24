import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']

})
export class EducationComponent implements OnInit {

  isAdmin = false;

  basfIsShown: boolean = false ;
  gcbaIsShown : boolean = false;
  exaIsShown:boolean = false;
  forumIsShown:boolean = false;
  
  detailOnClick(id:String) {
    if(id=="exa_detail"){
      this.exaIsShown = !this.exaIsShown;
    }
    else if(id=="gcba_detail"){
     this.gcbaIsShown = !this.gcbaIsShown;
    }
    else if(id=="basf_detail"){
      this.basfIsShown = !this.basfIsShown;
    }
    else if(id=="forum_detail"){
      this.forumIsShown = !this.forumIsShown;
    }
  }
 
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
