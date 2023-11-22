import { Component } from '@angular/core';
import { Ingredient } from '../share/ingredient.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrl: './shooping-list.component.css',
})
export class ShoopingListComponent {
  ingredientArr: Ingredient[] = [
    new Ingredient('Apple', 100),
    new Ingredient('Orange', 500),
  ];
}
