import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodsService } from 'src/app/services/foods.service';
import { MenuItemInstance } from 'src/interfaces/MenuItems';
@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
})
export class MealsComponent {
  constructor(private foodService: FoodsService) {}

  mealInput!: string;
  meals: MenuItemInstance[] | undefined;
  search() {
    this.foodService.searchMeals(this.mealInput).subscribe((data) => {
      console.log(data);
      this.meals = data.menuItems;
    })
  }
}
