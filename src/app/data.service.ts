import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataItem } from './data/dataitem';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpClient: HttpClient;
  dataPath: string;
  dataItems: Observable<DataItem[]>;

  constructor(private client: HttpClient) {
    this.httpClient = client;
  }

  getData(): Observable<DataItem[]> {
    this.dataPath = environment.data;
    this.dataItems = this.httpClient.get<DataItem[]>(this.dataPath);
    return this.dataItems;
  }
}
