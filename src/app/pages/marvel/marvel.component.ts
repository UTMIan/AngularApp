import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/models/ArticleMarvel.model';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {

  constructor(private MarvelService: MarvelService){}
    public marvels: Personajes[]=[];

    ngOnInit(): void{
      this.MarvelService.getMarvel().subscribe((Response: any)=>{
        console.log(Response.data)
        this.marvels=Response.data.results;
      });
    }
    
  }