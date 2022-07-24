import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personaURL = environment.personaURL;

  constructor(private httpClient: HttpClient) { }

  public verPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.personaURL + 'ver/personas');
  }
  
  public buscarPersona(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.personaURL+`detail/${id}`);
  }  

 // public save(persona: Persona): Observable<any> {
 //  return this.httpClient.post<any>(this.personaURL + 'new/persona', persona);
 // }

  public modificarPersona(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.personaURL + `modificar/persona/${id}`, persona);
  }

  //public delete(id: number): Observable<any> {
    //return this.httpClient.delete<any>(this.personaURL + `delete/${id}`);
  //}
}