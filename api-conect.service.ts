import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from './../../environments/environment';


export interface Apod {
  copyright: string;
  date: string;
  explanation: string;
  media_type: string;
  service_version: string;
  title: string;
  hdurl: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})



export class ApiConectService {
   
  constructor(private http: HttpClient){    
    this.http.get(`http://www.omdbapi.com/?apikey=[8e8d202]&`)}


    getPelicula()
    {
       this.http.get(`http://www.omdbapi.com/?apikey=[8e8d202]&`).subscribe(data => {
        console.log(data);
      });
    }

    getPel(): Observable<any>{
      return this.http.get('https://www.omdbapi.com/?apikey=<8e8d202>&t=<título>&y=<año>');
    }

    
}


