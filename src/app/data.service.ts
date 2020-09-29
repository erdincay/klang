import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpClient: HttpClient;
  dataPath: string;
  dataItems: Observable<string[]>;

  constructor(private client: HttpClient) {
    this.httpClient = client;
  }

  getData(): Observable<string[]> {
    this.dataPath = environment.data;
    this.dataItems = this.httpClient.get<string[]>(this.dataPath);
    return this.dataItems;
  }
}
