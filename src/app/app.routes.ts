import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ExpensesComponent } from './expenses/expenses.component';
import { PostLoginWrapperComponent } from './post-login-wrapper/post-login-wrapper.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewExpenseComponent } from './new-expense/new-expense.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "",
        component: PostLoginWrapperComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: "app",
        component: PostLoginWrapperComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: "profile",
                component: ProfileComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: "expenses",
                component: ExpensesComponent,
                canActivate: [AuthGuardService],
            },
            {
                path: "categories",
                component: CategoriesComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: "new-expense",
                component: NewExpenseComponent,
                canActivate: [AuthGuardService]
            }
        ]
    }
];
