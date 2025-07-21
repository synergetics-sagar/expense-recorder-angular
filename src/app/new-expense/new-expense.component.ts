import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { ExpensesService } from '../services/expenses.service';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {  MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
// MatInputModule, MatFormFieldModule
@Component({
  selector: 'app-new-expense',
  providers: [provideNativeDateAdapter()],
  imports: [MatCard, MatButton, MatIcon, RouterModule, ReactiveFormsModule, JsonPipe, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSelectModule],
  templateUrl: './new-expense.component.html',
  styleUrl: './new-expense.component.css'
})
export class NewExpenseComponent {

  categories: any
  newExpense: FormGroup
  constructor(private router: Router,private cs: CategoriesService, private es: ExpensesService){
    this.newExpense = new FormGroup({
      description: new FormControl(),
      amount: new FormControl(),
      date: new FormControl(),
      categoryId: new FormControl()
    })
  }

  ngOnInit(){
    this.cs.getCategories()
    .subscribe({
      next: (res:any)=>this.categories = res.categories,
      error: (err)=>console.log(err)
    })
  }

  handleSubmit(){
    console.log(this.newExpense.value)
    this.es.addExpense(this.newExpense.value)
    .subscribe({
      next: (res)=>{
        alert("New Expense Created")
        // this.newExpense.reset()
        this.router.navigate(["/app/expenses"])
      },
      error: (err)=>console.log(err)
    })
  }

}
