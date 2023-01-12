import { Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { SignupComponent } from '../signup/signup.component';

const ROUTES: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: UserComponent },
];

export { ROUTES };
