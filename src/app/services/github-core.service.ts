import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment as dev } from "../../environments/environment";
import { environment as prod } from "../../environments/environment.prod";
import {FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private appConfig: string = dev.production ? prod.apiUrl : dev.apiUrl;
  searchForm: FormGroup = new FormGroup({
    search: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });
  githubData: any;

  constructor(
    private _http: HttpClient,
  ) { }

  get search() {
    return this.searchForm.get('search');
  }

  clearData():void {
    this.search?.patchValue('');
    this.githubData = [];
  }

  sendRequestToSearchUsers(): Observable<any> {
    return this._http.get(`${this.appConfig}/search/users?q=` + this.search?.value + `&per_page=20`);
  }
}
