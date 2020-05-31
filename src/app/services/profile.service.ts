import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  constructor(private http:HttpClient) { 
  	console.log("service is now ready!");
  	this.username = 'kirandash';
  }

  getProfileInfo():Observable<any>{
  	return this.http.get("https://api.github.com/users/" + this.username);
  }
  getProfileRepos():Observable<any>{
  	return this.http.get("https://api.github.com/users/" + this.username+"/repos");
  }

  updateProfile(username:string){
  	this.username=username;
  }
}