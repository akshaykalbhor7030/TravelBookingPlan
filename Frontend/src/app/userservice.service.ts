import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { 
    provideHttpClient();
  }
baseUrl="http://localhost:8080/api/user";
 public addUser(userData:any){
  return this.http.post(this.baseUrl+"/add",userData);
}
public getUsers(){
  return this.http.get(this.baseUrl+"/get");
}
public viewUsers(id:any){
  console.log("in Service:",id);
  return this.http.get(this.baseUrl+"/byid/"+id);
}

public updateUser(id:any,userData:any){
  return this.http.put(this.baseUrl+"/update/"+ id,userData);
}
public deleteUser(id:any){
  return this.http.delete(this.baseUrl+"/delete/"+id);
}
}