import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface INews {
  author: string;
  title: string;
  points: number;
  id: string;
  commentsNumber: number;
  url?: string;
  text?: string;
}

@Component({
  selector: 'app-news-feed-item',
  templateUrl: './news-feed-item.component.html',
  styleUrls: ['./news-feed-item.component.css'],
})
export class NewsFeedItemComponent implements OnInit {
  @Input() newsItem!: INews;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  onNewsItemClick() {
    this.router.navigate(['news', this.newsItem.id], {
      relativeTo: this.route,
    });
  }
}
