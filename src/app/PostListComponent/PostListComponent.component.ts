import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './PostListComponent.component.html',
  styleUrls: ['./PostListComponent.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  constructor() { }

  ngOnInit() {
  }

  onNoLove() {
    return this.postLoveIts -= 1;
  }

  onLove() {
    return this.postLoveIts +=  1;
  }

}
