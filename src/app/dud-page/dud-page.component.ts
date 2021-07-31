import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dud-page',
  template: `
    <app-category-list></app-category-list>
    <app-media-list></app-media-list>
  `,
  styles: []
})
export class DudPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
