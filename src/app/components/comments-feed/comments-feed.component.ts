import { Component, Input, OnInit } from '@angular/core';
import { NewsComments } from 'src/app/shared/news.model';

@Component({
  selector: 'app-comments-feed',
  templateUrl: './comments-feed.component.html',
  styleUrls: ['./comments-feed.component.css']
})
export class CommentsFeedComponent implements OnInit {

  @Input() comment!: NewsComments;

  showResponses: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleShow() {
    this.showResponses = !this.showResponses;
  }



}
