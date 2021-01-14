import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suite-fibo',
  templateUrl: './suite-fibo.component.html',
  styleUrls: ['./suite-fibo.component.css']
})
export class SuiteFiboComponent implements OnInit {
  nombres: number[] = [1,1,2,3,5,8,13,21,34,55]

  constructor() { }

  ngOnInit(): void {
  }

}