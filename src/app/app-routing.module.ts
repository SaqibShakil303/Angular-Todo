import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { ViewTodosComponent } from './pages/view-todos/view-todos.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';

const routes: Routes = [

 {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
 }, {
    path:'home',
    component: HomeComponent,
    title:'Home - Freaks Todo Manager'
  }
  ,{
    path:'add-todo',
    component: AddTodoComponent,
    title:'Add Todo - Freaks Todo Manager'
  }
  ,{
   path:'view-todo',
   component: ViewTodosComponent,
   title: 'View Todo - Freaks Todo Manager'
  }
  ,{
    path:'update-todo',
    component: UpdateTodoComponent,
    title: 'Update Todo - Freaks Todo Manager'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
