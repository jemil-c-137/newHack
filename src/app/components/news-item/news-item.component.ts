import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/news.service';
import { News, NewsComments } from 'src/app/shared/news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css'],
})
export class NewsItemComponent implements OnInit {
  newsItem!: News;
  newsId!: string;
  isFetching = false;
  errorMessage: null | string = null;
  showComments = false;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.newsId = params['id'];
    });
    this.isFetching = true;
    this.fetchNews(this.newsId);
  }

  fetchNews(id: string) {
    this.newsService.fetchSingleNews(id).subscribe(
      (news) => {
        this.newsItem = news;
        this.isFetching = false;
      },
      (error: Error) => {
        this.errorMessage =
          'Error ocurred, please try again later';
        this.isFetching = false;
      }
    );
  }

  onToggleComments() {
    this.showComments = !this.showComments;
  }
}
