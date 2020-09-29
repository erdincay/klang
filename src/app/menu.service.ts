import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  httpClient: HttpClient;
  menuPath: string;
  menuItems: Observable<string[]>;

  constructor(private client: HttpClient) {
    this.httpClient = client;
  }

  getMenu(): Observable<string[]> {
    this.menuPath = environment.menu;
    this.menuItems = this.httpClient.get<string[]>(this.menuPath);
    return this.menuItems;
  }
}
