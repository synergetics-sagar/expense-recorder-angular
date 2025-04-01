import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CategoriesService } from '../services/categories.service';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-categories',
  imports: [CommonModule,MatCardModule, MatIconModule, MatButtonModule, MatTableModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  
  categories: any
  displayColumns: string[] = ["Title", "Actions"]
  constructor(private cs: CategoriesService){}

  ngOnInit(){
    this.cs.getCategories()
    .subscribe({
      next: (res:any)=>this.categories=res.categories,
      error: (error)=>console.log(error)
    })
  }
}
