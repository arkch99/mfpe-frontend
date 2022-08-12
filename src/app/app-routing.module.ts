import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PensionDetailsComponent } from './components/pension-details/pension-details.component';
import { ProcessPensionComponent } from './components/process-pension/process-pension.component';

const routes: Routes = [
  {path:"pensionDetails", component: PensionDetailsComponent},
  {path:"processPension", component: ProcessPensionComponent},
  {path:"login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
