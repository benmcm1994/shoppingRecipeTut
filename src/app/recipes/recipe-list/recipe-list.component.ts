import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe("Test Recipe", "Test Desc", "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg"),
   new Recipe("Test Recipe 2", "Test Desc", "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-08.jpg")];

  constructor() { }

  ngOnInit() {
  }

}
