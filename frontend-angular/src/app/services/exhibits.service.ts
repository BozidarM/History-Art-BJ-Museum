import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Exhibits {
  id?: string;
  title: string;
  culture: string;
  century: any;
  classification: string;
  period: string;
  image: string;
  description: string;
  tourTime: number;
  price: number;
  stars: any;
  rating: number;
}

export interface UpdatingStars {
  id: string;
  rating: number;
}

export interface Comment {
  exhibitId: string;
  username: string;
  content: string;
  postedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ExhibitsService {

  constructor(private http:HttpClient, private router:Router) { }

  public findAll() : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/exhibits/all");
  }

  public findAllByName(search: string) : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/exhibits/search/" + search);
  }

  public findExhibitById(id: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/exhibits/exhibit/" + id);
  }

  public findAllByExibitId(id: string) : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/comments/all-comments/" + id);
  }

  public insertComment(model: Comment) :  Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/comments/insert", model)
  }

  public updateStars(model: UpdatingStars) :  Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/exhibits/update-stars", model);
  }

  showExhibit(id: String): any {
    this.router.navigate(['exhibits/exhibit/' + id]);
  }
}
