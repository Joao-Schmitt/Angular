import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { ClassroomComponent } from './classroom/classroom.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: LoginComponent },
    {path: 'create-account', component: CreateAccountComponent },
    {path: 'student-home', component: StudentHomeComponent },
    {path: 'classroom', component: ClassroomComponent },
];
