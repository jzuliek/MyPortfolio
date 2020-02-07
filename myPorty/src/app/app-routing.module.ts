import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { Project1Component } from './pages/project1/project1.component';
import { P2Component } from './pages/p2/p2.component';
import { P3Component } from './pages/p3/p3.component';
import { P4Component } from './pages/p4/p4.component';
import { P5Component } from './pages/p5/p5.component';
import { P6Component } from './pages/p6/p6.component';
import { P7Component } from './pages/p7/p7.component';
import { P8Component } from './pages/p8/p8.component';


const routes: Routes = [
  {path: 'landing' , component:LandingComponent},
  {path: 'projects', component: ProjectsComponent},
  
  { path: '',
  redirectTo: '/landing',
  pathMatch: 'full'
  },
  {path: 'project1', component:Project1Component},
  {path: 'p2', component:P2Component},
  {path: 'p3', component:P3Component},
  {path: 'p4', component:P4Component},
  {path: 'p5', component:P5Component},
  {path: 'p6', component:P6Component},
  {path: 'p7', component:P7Component},
  {path: 'p8', component:P8Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
