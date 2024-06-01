import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://retoolapi.dev/HMfpmN/data');
  }
  getById(id: number) {
    return this.http.get('https://retoolapi.dev/HMfpmN/data/' + id)
  }
}
