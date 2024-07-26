import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducers/user-reducer';
import { CounterComponent } from './components/counter/counter.component';
import { RegisterComponent } from './components/register/register.component';
import { counterReducer } from './reducers/counter-reducer';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user-effects';
import { HttpClientModule } from '@angular/common/http';
import { RxjsLearningComponent } from './components/rxjs-learning/rxjs-learning.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    RegisterComponent,
    HomeComponent,
    NavComponent,
    RxjsLearningComponent,
    UsersComponent,
    AddUserComponent,
    UpdateUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      { users: userReducer }),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
