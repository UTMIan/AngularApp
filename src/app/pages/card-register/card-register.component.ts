import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.css']
})
export class CardRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  card: CardModel = new CardModel();
  dataCard: CardModel[] = [
    {
      cardTitle: "Title Card Example",
      description: "Description Example",
      button: "Button Example",
      url: "https://www.mbacenterglobal.com/uploads/images/2022/3/1646300677"
    }
  ]
  addCard(card: CardModel) {
  this.dataCard.push(Object.assign({},card));
  }
}
