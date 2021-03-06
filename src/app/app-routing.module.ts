import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {MainComponent} from './main/main.component';
import {InputComponent} from './input/input.component';

const routes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent},
  { path: 'main', component: MainComponent},
  {path: 'reg', component: InputComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true})],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
