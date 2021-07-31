import {Component, Input, OnInit} from '@angular/core';
import {MediaItem} from "../../models/MediaItem";

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss']
})
export class MediaItemComponent implements OnInit {

  @Input() item!: MediaItem; // this will come as converted and ready to use for displaying image, instead of whole MediaItem
  @Input() author!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
