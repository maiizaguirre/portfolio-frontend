import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  isLogged = false;
  isAdmin = false;

  
  
  constructor(private tokenService: TokenService) { }
  
  ngOnInit(): void {

    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();

   
  }
 
}
