import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SidebarModule} from 'primeng/sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Project1Component } from './pages/project1/project1.component';
import { P2Component } from './pages/p2/p2.component';
import { P3Component } from './pages/p3/p3.component';
import { P4Component } from './pages/p4/p4.component';
import { P5Component } from './pages/p5/p5.component';
import { P6Component } from './pages/p6/p6.component';
import { P7Component } from './pages/p7/p7.component';
import { P8Component } from './pages/p8/p8.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LandingComponent,
    ResumeComponent,
    ProjectsComponent,
    NavbarComponent,
    Project1Component,
    P2Component,
    P3Component,
    P4Component,
    P5Component,
    P6Component,
    P7Component,
    P8Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    BrowserAnimationsModule,
    AccordionModule,
    CardModule,
    TabViewModule,
    NgbModule,
    SidebarModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
