import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://retoolapi.dev/8Ebnmu/data');
  }
  getById(id: number) {
    return this.http.get('https://retoolapi.dev/8Ebnmu/data/' + id)
  }

  updateData(payload: any) {
    return this.http.patch('https://retoolapi.dev/8Ebnmu/data/' + payload.id, payload)
  }
  postData(payload: any) {
    return this.http.post('https://retoolapi.dev/8Ebnmu/data', payload) 
  }
  deleteData(id: number) {
    return this.http.delete('https://retoolapi.dev/8Ebnmu/data/'+id) 
  }
}
