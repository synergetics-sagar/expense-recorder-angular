import { createAction, props } from "@ngrx/store";


export const saveCategories =  createAction("Save Categories", props<{categories: any}>())