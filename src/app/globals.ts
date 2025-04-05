export const apiPort = 8080
export const baseUrl = `http://localhost:${apiPort}`
export const usersApi = `${baseUrl}/users`
export const loginApi = `${usersApi}/login`
export const profileApi = `${usersApi}/profile`

export const categoriesApi = `${baseUrl}/categories`
export const deleteCategoryApi = (id:any)=>`${categoriesApi}/${id}`

export const expensesApi = `${baseUrl}/expenses`
export const getExpensesDateRange = (from: string, to: string)=>`${expensesApi}/${from}/${to}`
export const getExpensesCategoryDateRange = (categoryId: string, from: string, to: string)=>`${expensesApi}/${categoryId}/${from}/${to}`
export const deleteExpenseApi = (id: any)=>`${expensesApi}/${id}`