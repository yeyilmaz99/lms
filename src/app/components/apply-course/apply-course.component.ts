import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { timestamp } from 'rxjs';

export interface PeriodicElement {
  Pazartesi: string[];
  Salı: string[];
  Çarşamba: string[];
  Perşembe: string[];
  Cuma: string[];
  Cumartesi: string[];
}


@Component({
  selector: 'app-apply-course',
  templateUrl: './apply-course.component.html',
  styleUrls: ['./apply-course.component.css']
})
export class ApplyCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
  timeSlots = [
    { time: '10:00' },
    { time: '11:00' },
    { time: '12:00' },
    { time: '13:00' },
    { time: '14:00' },
    { time: '15:00' },
    { time: '16:00' },
    { time: '17:00' },
    { time: '18:00' },
  ];

  selectedTimes: string[] = [];
  selectedButton: any = {}

  buttonClick(time: string, day: string) {
    const key = `${day} - ${time}`;
    if (this.selectedTimes.includes(key)) {
      const index = this.selectedTimes.indexOf(key);
      this.selectedTimes.splice(index, 1);
    } else {
      this.selectedTimes.push(key);
    }
    console.log(this.selectedTimes)

  }

  isSelected(time: string, day: string): boolean {
    const key = `${day} - ${time}`;
    return this.selectedTimes.includes(key);
  }






}

