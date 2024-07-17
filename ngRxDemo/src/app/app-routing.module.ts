import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { RxjsLearningComponent } from './components/rxjs-learning/rxjs-learning.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'rxjs', component: RxjsLearningComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
