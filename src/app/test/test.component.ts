import { Component, OnInit } from '@angular/core';
import {ReaderService} from "../services/reader.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  readerMessage$!: Observable<number>;

  constructor(private readerService: ReaderService) { }

  ngOnInit(): void {
    this.readerMessage$ = this.readerService.getHello();
  }
}
