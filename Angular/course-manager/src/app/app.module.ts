import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from 'courses/course-list.component';
import { StarComponent } from 'star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/navbar.component';
import { RouterModule } from '@angular/router';
import { erro404 } from './erro404/erro404.component';
import { CourseInfoComponent } from 'courses/course-info.component';
import { HttpClientModule } from '@angular/common/http'
import { CourseModule } from 'courses/course.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    erro404,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
    
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
    
      {
        path:'**', component: erro404
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
