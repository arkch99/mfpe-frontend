import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PensionerInput } from 'src/app/models/pensioner-input.model';
import { ProcessPensionService } from 'src/app/services/process-pension.service';

@Component({
  selector: 'app-pension-details',
  templateUrl: './pension-details.component.html',
  styleUrls: ['./pension-details.component.css']
})
export class PensionDetailsComponent implements OnInit {

  msg: string;
  errors: string[];

  constructor(private pensionService: ProcessPensionService) {
    this.msg="";
    this.errors = [];
   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log("Submitted pension details form");
    console.log(form.value);
    let pensionerInput = new PensionerInput(form.value.name, form.value.dob, form.value.pan, form.value.aadhaar, form.value['pension-type']);

    this.pensionService.getPensionDetails(pensionerInput)
    .subscribe(
      data => {
        this.msg = `The pension amount is ${data.pensionAmount}`;
      },
      error => {        
          console.log(error);          
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
