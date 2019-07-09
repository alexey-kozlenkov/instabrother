import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'photo-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() title: string;
  @Input() image: string;
  @Input() description: string;
  @Input() author: string;
  @Input() timestamp: Date;
  @Input() liked: boolean;

  @Output() likedChange = new EventEmitter<boolean>();

  onLike() {
    this.likedChange.emit(!this.liked);
  }
}
