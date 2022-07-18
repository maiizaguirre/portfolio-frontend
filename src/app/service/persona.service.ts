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

  //public lista(): Observable<Persona[]> {
  //  return this.httpClient.get<Persona[]>(this.personaURL);
 // }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.personaURL + `detail/${id}`);
  }

  //public detailName(nombre: string): Observable<Persona> {
  //  return this.httpClient.get<Persona>(this.personaURL + `detailname/${nombre}`);
  //}

 // public save(persona: Persona): Observable<any> {
 //  return this.httpClient.post<any>(this.personaURL + 'new/persona', persona);
 // }

  public update(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.personaURL + `modificar/persona/${id}`, persona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.personaURL + `delete/${id}`);
  }
}