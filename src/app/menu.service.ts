import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MenuItem } from './menu/menuitem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  httpClient: HttpClient;
  menuPath: string;
  menuItems: Observable<MenuItem[]>;

  constructor(private client: HttpClient) {
    this.httpClient = client;
  }

  getMenu(): Observable<MenuItem[]> {
    // this.menuPath = `${environment.menu}`;
    this.menuPath = environment.menu;
    this.menuItems = this.httpClient.get<MenuItem[]>(this.menuPath);
    return this.menuItems;
  }
}
