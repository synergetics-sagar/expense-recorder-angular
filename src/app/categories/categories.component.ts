import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CategoriesService } from '../services/categories.service';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { saveCategories } from './categories.actions';

@Component({
  selector: 'app-categories',
  imports: [CommonModule,MatCardModule, MatIconModule, MatButtonModule, MatTableModule, MatTabsModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  
  newCategoryForm: FormGroup
  categories: any = []
  displayColumns: string[] = ["Title", "Actions"]
  constructor(private store: Store<{categories: any}> ,private cs: CategoriesService, private as: AuthService, private router: Router){
    this.newCategoryForm = new FormGroup({
      title: new FormControl("")
    })
  }

  ngOnInit(){
      // Fetching categories from redux store
      // Only if categories are available in the redux store
      this.store.select("categories")
      .subscribe({
        next: (categories)=>{
          if(categories.length==0){
            // Fetch Categories
            this.getCategories()
          }
          else{
            this.categories = categories
          }
        },
        error: (error)=>console.log(error)
      })
   
  }

  getCategories(){
      // Fetching categories from REST API and Saving it in the redux store
      this.cs.getCategories()
      .subscribe({
        next: (res:any)=>{
          let categories = res.categories
          this.categories = categories
          this.store.dispatch(saveCategories({categories}))
        },
        error: (error)=>console.log(error)
      })
  }

  handleSubmit(){
    this.cs.addCategory(this.newCategoryForm.value)
    .subscribe({
      next: (res)=>{
        this.newCategoryForm.reset()
        this.getCategories()
        alert("Category Created!")
      },
      error: (error)=>console.log(error)
    })
  }

  handleDelete(id:any){
    this.cs.deleteCategory(id)
    .subscribe({
      next: res=>{
        this.getCategories()
        alert("Category Deleted")
      },
      error: (error)=>console.log(error)
    })
  }
}
