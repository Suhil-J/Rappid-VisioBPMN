import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisioBPMNServiceService {

  constructor(private http: HttpClient) { }
  LoadGraphItems() {
    return this.http.get("../assets/VisioBPMN.json");
  }
}
