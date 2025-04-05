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

@Component({
  selector: 'app-categories',
  imports: [CommonModule,MatCardModule, MatIconModule, MatButtonModule, MatTableModule, MatTabsModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  
  newCategoryForm: FormGroup
  categories: any
  displayColumns: string[] = ["Title", "Actions"]
  constructor(private cs: CategoriesService, private as: AuthService, private router: Router){
    this.newCategoryForm = new FormGroup({
      title: new FormControl("")
    })
  }

  ngOnInit(){
    this.getCategories()
  }

  getCategories(){
    this.cs.getCategories()
    .subscribe({
      next: (res:any)=>this.categories=res.categories,
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
