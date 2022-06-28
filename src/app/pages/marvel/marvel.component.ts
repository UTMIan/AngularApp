import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/Article.model';
import { mArticleModel } from 'src/app/models/mArticle.model';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {

  constructor(private: MarvelComponent) { }
  public articles: mArticleModel[]=[];

  ngOnInit(): void {
    this.MarvelService.getMarvel().subscribe((response:any) => {
      console.log(response.articles);
      this.articles = response.articles;
    });
  }
}
