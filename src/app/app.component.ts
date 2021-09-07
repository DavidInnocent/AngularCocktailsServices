import { Component } from '@angular/core';
import { CocktailService } from './cocktail/coctail.service';
import { MessageService } from './shared/message.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Drinks';

  constructor(private dataService: CocktailService, private messageService: MessageService) { }

  drinks:any[]=[]

  ngOnInit() {


    this.dataService.sendGetRequest().subscribe(data => {

      this.drinks = data.drinks
      this.messageService.nextMessage(data)
    })
  }
}
