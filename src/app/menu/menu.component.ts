import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../menu.service';
import { MenuItem } from './menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuitems$: Observable<MenuItem[]> = this.ms.getMenu();

  constructor(private ms: MenuService) {
  }

  ngOnInit(): void {
  }

}
