import { RegisterFormComponent } from "./register-form/register-form.component"
import { LoginFormComponent } from "./login-form/login-form.component"
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";

const routes: Routes = [
  { path : "register", component : RegisterFormComponent},
  { path : "login", component : LoginFormComponent},
  { path : "welcome", component : WelcomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
