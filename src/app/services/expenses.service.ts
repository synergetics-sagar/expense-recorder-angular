import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }

  // getExpenses(){}

  // getExpenses(from: String, to: String){}

  addExpense(){

  }
}
