import { Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewComponent } from './home/view/view.component';
import { UpdateuserComponent } from './home/updateuser/updateuser.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path:'users',component:ListUsersComponent},
    {path:'users/:id',component:ViewComponent},
    {path:'edit/:id',component:UpdateuserComponent}
];