import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListStudentsComponent } from './students/list-students.component';
import { CreateStudentComponent } from './students/create-student.component';
import { RouterModule,Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

 const appRoutes: Routes = [
  { path: 'list', component: ListStudentsComponent },
  { path: 'create', component: CreateStudentComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
