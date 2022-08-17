import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PensionDetailsComponent } from './components/pension-details/pension-details.component';
import { ProcessPensionComponent } from './components/process-pension/process-pension.component';
import { AuthGuardService } from './utils/auth-check.guard';
import { RestrictAccessGuard } from './utils/restrict-access-guard';

const routes: Routes = [
  {path:"", pathMatch: "full", redirectTo: "login" },
  {path:"pensionDetails", component: PensionDetailsComponent, canActivate: [AuthGuardService]},
  {path:"processPension", component: ProcessPensionComponent, canActivate: [AuthGuardService]},
  {path:"login", component: LoginComponent, canActivate: [RestrictAccessGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
