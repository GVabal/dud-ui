import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: string[] = ['Sample1', 'Sample2', 'Sample3'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
