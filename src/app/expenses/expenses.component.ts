import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {JsonPipe} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { CategoriesService } from '../services/categories.service';
import { ExpensesService } from '../services/expenses.service';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-expenses',
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatSelectModule, MatTableModule, RouterModule, JsonPipe],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {
  filters: FormGroup
  categories: any
  expenses: any
  displayColumns: string[] = ["Description", "Amount", "Date", "Category", "Actions"]

  constructor(private cs: CategoriesService, private es: ExpensesService){
    
    const {from, to} = this.getLastMonthDateRange(new Date())

    this.filters = new FormGroup({
      from: new FormControl<Date | null>(from),
      to: new FormControl<Date | null>(to),
      categoryId: new FormControl("All")
    });
  }

  getExpenses(categoryId: string, from: string, to: string){
    this.es.getExpenses(categoryId, from, to)
    .subscribe({
      next: (res:any)=>this.expenses = res.foundExpenses,
      error: (err)=>console.log(err)
    })
  }


  getLastMonthDateRange(today: Date){
    const currentMonth = today.getMonth()
    const currentYear = today.getFullYear()
    const currentDate = today.getDate()

    const from = new Date(`${currentYear}-${currentMonth+1}-01`)
    const to = new Date(`${currentYear}-${currentMonth+1}-${currentDate}`)

    return {from, to}
  }

  ngOnInit(){
    this.getCategories()
    this.handleSearch()
  }

  getCategories(){
    this.cs.getCategories()
    .subscribe({
      next: (res:any)=>this.categories=res.categories,
      error: (error)=>console.log(error)
    })
  }

  getFormatedDate(date: any){
    date = new Date(date)
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    return `${year}-${month+1}-${day}`
  }

  handleSearch(){
    let {from, to, categoryId} = this.filters.value
    from = this.getFormatedDate(from)
    to = this.getFormatedDate(to)
    this.getExpenses(categoryId, from, to)
  }

  handleDelete(id: any){
    this.es.deleteExpense(id)
    .subscribe({
      next: (res)=>{
        alert("Expense Removed")
        this.handleSearch()
      },
      error: (err)=>console.log(err)
    })
  }
}
