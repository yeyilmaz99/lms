import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courser-info',
  templateUrl: './courser-info.component.html',
  styleUrls: ['./courser-info.component.css']
})
export class CourserInfoComponent implements OnInit {
  cvOpened:boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

}
