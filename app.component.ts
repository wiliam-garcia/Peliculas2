
import { Component, OnInit, ViewChild, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { ApiConectService } from './Services/api-conect.service';



export const environment= {
  production: false,
  peliUrl: 'http://www.omdbapi.com/?apikey=[8e8d202]&',
  pelikey: '8e8d202'
  
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'proyectopeli';
  
  ;



  constructor(public router: Router,
          private _ApiConectService: ApiConectService){}
  
  

  ngOnInit(): void {
    this._ApiConectService.getPelicula();

    this._ApiConectService.getPel().subscribe(data => {
      let users = data;
    });
  }

  }

