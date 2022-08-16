import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProcessPensionInput } from "src/app/models/process-pension-input.model";
import { ProcessPensionService } from 'src/app/services/process-pension.service';

@Component({
  selector: 'app-process-pension',
  templateUrl: './process-pension.component.html',
  styleUrls: ['./process-pension.component.css']
})
export class ProcessPensionComponent implements OnInit {

  msg: string;
  error: boolean;

  constructor(private pensionService: ProcessPensionService) { 
    this.msg = "";
    this.error = false;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log("Submitted process pension form");

    let processPensionInput = new ProcessPensionInput(form.value.aadhaar, form.value['pension-amt'], form.value['bank-charge']);
    this.error = false;
    this.pensionService.processPension(processPensionInput)
    .subscribe(
      data => {
        if(data.processPensionStatusCode == 10) {
          this.error = false;
          this.msg = `Pension was successfully disbursed!`;          
        }
        else {
          this.error = true;
          this.msg = `Calculated amount is wrong, please ensure it is correct`;
        }
      },
      error => {        
          console.log(error);          
          this.error = true;
          if(error.status == 404) {
            this.msg = "Service is unavailable";
          }
          else if(error.status == 400) {
            this.msg = error.error.message;
          }          
        }     
    );
  }

}
