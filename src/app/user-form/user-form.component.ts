import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userName: string;
  workoutType: string;
  workoutMinutes: number;

  addWorkout() {
    let workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    workouts.push({
      userName: this.userName,
      workoutType: this.workoutType,
      workoutMinutes: this.workoutMinutes
    });
    localStorage.setItem('workouts', JSON.stringify(workouts));

    // Optionally, clear the form fields after submission
    this.userName = '';
    this.workoutType = '';
    this.workoutMinutes = null;
  }
}
