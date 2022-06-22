import { Component } from '@angular/core';
import { CardModel } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
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



