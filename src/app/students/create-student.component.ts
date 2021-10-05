import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from './student.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  title = 'Add Student';
  angForm: FormGroup;

  constructor(private stdservice: StudentService, private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      city: ['', Validators.required ],
      gender: ['', Validators.required ],
      department: ['', Validators.required ]
   });
  }

  addStudents(name, city, gender, department) {
      this.stdservice.addStudents(name.value, city.value, gender.value, department.value);
      alert("data added success");
    name.value='';
    city.value='';
    gender.value='';
    department.value='';

    }

  ngOnInit() {
  }

}
