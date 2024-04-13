import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   apiUrl:string = 'http://localhost:3000/api/post'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  submitPost(formData: any): Observable<any> {
   
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Set appropriate headers if needed
    // return this.http.post(apiUrl, formData, { headers });

    return this.http.post(this.apiUrl, formData);
  }
}
