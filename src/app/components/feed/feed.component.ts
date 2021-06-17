import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';
//import { INews } from './../news-item/news-item.component';
import { News } from 'src/app/shared/news.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  newsItems: News[] = [];
  errorMessage: null | string = null;
  isFetching = false

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.isFetching = true
    this.newsService.fetchNews().subscribe((newsArray: News[]) => {
      this.newsItems = newsArray
      this.isFetching = false
    }, (error => {
      this.errorMessage = 'Error ocurred, please try again later';
      this.isFetching = false
    }))
  }
}
