import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']

})
export class EducationComponent implements OnInit {
  basfIsShown: boolean = false ;
  gcbaIsShown : boolean = false;
  exaIsShown:boolean = false;
  forumIsShown:boolean = false;
  planeIcon: any ;
  gameIcon:any;
  volleyBallIcon:any;
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
 
  constructor() { 
  }

  ngOnInit(): void {
    this.planeIcon=awesom.faPlane;
    this.gameIcon=awesom.faGamepad;
    this.volleyBallIcon=awesom.faVolleyballBall;
  }

}
