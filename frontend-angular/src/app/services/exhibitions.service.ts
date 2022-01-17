import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Exhibitions {
  username: string;
  price: any;
  tourTime: any;
  items: any;
  orderedAt: any;
  status: any;
  type: any;
  dateVisit: any;
}

export interface UpdateExhibition {
  id: string;
  dateVisit: string;
}

export interface ExhibitionsStatus {
  id: any;
  status: any;
}


@Injectable({
  providedIn: 'root'
})


export class ExhibitionsService {

  constructor(private http:HttpClient, private router:Router) { }

  public findAllByUsername(username: String) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/exhibitions/all/" + username);
  }

  public findAllExhibitionsHistoryByUsername(username: String) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/exhibitions/all-history/" + username);
  }

  public insert(model: Exhibitions) : Observable<HttpResponse<any>>{
      return this.http.post<any>("http://localhost:8080/exhibitions/insert", model);
  }

  public changeStatus(model: ExhibitionsStatus) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/exhibitions/change-status", model);
  }

  public update(model: UpdateExhibition) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/exhibitions/update", model);
  }

  public deleteById(id: String) : Observable<HttpResponse<any>>{
    return this.http.delete<any>("http://localhost:8080/exhibitions/delete/" + id);
  }

  public findAllByType() : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/exhibitions/all-default");
  }

  public findExhibitionsById(id: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/exhibitions/exhibition/" + id);
  }

  showExhibition(id: String): any {
    this.router.navigate(['exhibitions/exhibition/' + id]);
  }

  public average(nums: any) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
  }
}
