import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({"Content-Type": "application/json"})
  constructor(private http:HttpClient) { }

  postlongurl(data : any): Observable<any>{
    const body = {longurl : data.longurl , shorturl : data.shorturl}
    return this.http.post(this.baseurl + 'store-url',body, {headers :this.httpHeaders});
  }
  
}


