import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
// Import StudentService
import { StudentService } from './student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
students: Student[];
  constructor(private _studentService: StudentService) { }

  ngOnInit() {
	  this.getStudents();
  }
  
  public getStudents() {
    this._studentService.getStudents().subscribe((data: Student[]) => {
      this.students = data;
    });
  }

}
