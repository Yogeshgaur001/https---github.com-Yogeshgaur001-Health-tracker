import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent {
  workouts: any[] = JSON.parse(localStorage.getItem('workouts') || '[]');
  filteredWorkouts: any[];
  searchName: string = '';
  filterType: string = '';
  currentPage: number = 1;
  pageSize: number = 5; // items per page

  constructor() {
    this.filteredWorkouts = this.workouts;
  }

  ngOnInit() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredWorkouts = this.workouts.filter(workout =>
      workout.userName.toLowerCase().includes(this.searchName.toLowerCase()) &&
      (this.filterType ? workout.workoutType === this.filterType : true)
    );
  }

  pageChanged(event) {
    this.currentPage = event;
  }
}

