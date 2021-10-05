import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class StudentService {
   
    LIVE_URI = 'http://localhost:3000';
    constructor(private httpClient: HttpClient) { }
    getStudents() {
        return this.httpClient.get(`${this.LIVE_URI}/students`);
    }

    addStudents(name, city, gender,  department) {
        //const uri = 'http://localhost:3000';
        const obj = {
          name: name,
          city: city,
          gender:gender,
          department:department
        };

        this.httpClient.post(`${this.LIVE_URI}/students`, obj)
            .subscribe(res => 
            	console.log('Done')
            );

            
    }
}