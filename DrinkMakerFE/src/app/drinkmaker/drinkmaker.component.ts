import { Component, OnInit } from '@angular/core';
import { DrinkService }      from '../../shared/drink.service';

@Component({
  selector: 'app-drinkmaker',
  templateUrl: './drinkmaker.component.html',
  styleUrls: ['./drinkmaker.component.css']
})
export class DrinkmakerComponent implements OnInit {

  actions = [];

  selectedDrink: string = null;

  drinks = [
    { id: 'chocolate', name: 'Chocolate'},
    { id: 'coffee', name: 'Coffee'},
    { id: 'lemontea', name: 'Lemon Tea'},
  ];

  constructor(private drinkService: DrinkService) { }

  ngOnInit(): void { }

  drinkChange($event): void {
    this.actions = [];
    this.drinkService.getActions(this.selectedDrink).subscribe((data: string[]) =>{
      this.actions = data;})  

  }

}
