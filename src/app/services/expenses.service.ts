import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { deleteExpenseApi, expensesApi, getExpensesCategoryDateRange, getExpensesDateRange } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }

  getExpenses(categoryId: string, from : string, to: string){
    if(categoryId=="All"){
      return this.http.get(getExpensesDateRange(from, to))
    }
    return this.http.get(getExpensesCategoryDateRange(categoryId, from, to))
  }

  addExpense(newExpense: any){
    return this.http.post(expensesApi, newExpense)
  }

  deleteExpense(expenseId: any){
    return this.http.delete(deleteExpenseApi(expenseId))
  }

}
