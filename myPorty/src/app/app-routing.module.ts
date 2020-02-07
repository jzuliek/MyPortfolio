import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ProjectsComponent } from './pages/projects/projects.component';


const routes: Routes = [
  {path: 'landing' , component:LandingComponent},
  {path: 'projects', component: ProjectsComponent},
  
  { path: '',
  redirectTo: '/landing',
  pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
