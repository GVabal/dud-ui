import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {MediaItem} from "../../models/MediaItem";

@Component({
  selector: 'app-media-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.scss']
})
export class MediaItemListComponent implements OnInit {

  mediaItems$!: Observable<MediaItem[]>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
