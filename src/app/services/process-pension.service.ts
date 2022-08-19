import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PensionDetail } from '../models/pension-detail.model';
import { PensionerInput } from '../models/pensioner-input.model';
import { ProcessPensionInput } from '../models/process-pension-input.model';
import { ProcessPensionResponse } from '../models/process-pension-reponse.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessPensionService {

  // add your base URL here
  baseUrl: string = 'http://localhost:8080/api'
  // baseUrl: string = 'http://processpensionpod4-env.eba-39rpi43n.us-east-1.elasticbeanstalk.com/api';

  constructor(private http: HttpClient) { }

  // Method to process the pension
  processPension(processPensionInput: ProcessPensionInput): Observable<ProcessPensionResponse> {
    return this.http.post<ProcessPensionResponse>(`${this.baseUrl}/processPension`, processPensionInput);
  }

  // Method to get pension details
  getPensionDetails(pensionerInput: PensionerInput): Observable<PensionDetail> {
    return this.http.post<PensionDetail>(`${this.baseUrl}/pensionDetail`, pensionerInput);
  }
}
