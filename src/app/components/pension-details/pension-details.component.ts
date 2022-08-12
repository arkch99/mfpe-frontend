import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pension-details',
  templateUrl: './pension-details.component.html',
  styleUrls: ['./pension-details.component.css']
})
export class PensionDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Submitted pension details form");
  }
}
