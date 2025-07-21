import { createReducer, on } from "@ngrx/store";
import { saveCategories } from "./categories.actions";

const initialState: any = []
export const categoriesReducer = createReducer(initialState, 
    on(saveCategories, (prevCategories, {categories})=>{
        return categories
    })
)