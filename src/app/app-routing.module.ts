import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourserInfoComponent } from './components/courser-info/courser-info.component';
import { CourserResumeComponent } from './components/courser-resume/courser-resume.component';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo:"courserInfo"},
  {path:"courserInfo", component:CourserInfoComponent},
  {path:"courserResume", component:CourserResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
