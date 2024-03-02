import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyCourseComponent } from './components/apply-course/apply-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourserInfoComponent } from './components/courser-info/courser-info.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CourserResumeComponent } from './components/courser-resume/courser-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplyCourseComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    CourserInfoComponent,
    PortfolioComponent,
    CourserResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
