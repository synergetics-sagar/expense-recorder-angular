import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categoriesApi, deleteCategoryApi } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(categoriesApi)
  }

  addCategory(newCategory:any){
    return this.http.post(categoriesApi, newCategory)
  }

  deleteCategory(id: any){
    return this.http.delete(deleteCategoryApi(id))
  }
}
