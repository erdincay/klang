import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { DataItem } from './dataitem';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {


  dataItems$: Observable<DataItem[]> = this.ds.getData();

  constructor(private ds: DataService) {
  }

  ngOnInit(): void {
  }

}
