import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IRes, News, INews } from './shared/news.model';
import { Observable } from 'rxjs';

const API_BASE_URL = 'https://hn.algolia.com/api/v1/';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}


  fetchNews(): Observable<News[]> {
    return this.http
      .get<IRes>(`${API_BASE_URL}/search?`, {
        params: new HttpParams().set('tags', 'front_page'),
      })
      .pipe<News[]>(
        map((res) => {
          console.log(res);
          const fetchedNews = res.hits.map((newsItem: INews) => {
            return new News(
              newsItem.author,
              newsItem.title,
              newsItem.points,
              newsItem.objectID,
              newsItem.num_comments,
              newsItem.created_at,
              newsItem.url,
              newsItem.text
            );
          });
          return fetchedNews;
        })
      );
  }

  fetchSingleNews(id: string) {
    return this.http.get<INews>(`${API_BASE_URL}/items/${id}`).pipe<News>(
      map((newsItem: INews) => {
        console.log(newsItem, 'raw item');
        const fetched = new News(
          newsItem.author,
          newsItem.title,
          newsItem.points,
          newsItem.objectID,
          newsItem.num_comments,
          newsItem.created_at,
          newsItem.url,
          newsItem.text,
          newsItem.children
        );
        console.log(fetched);
        return fetched;
      })
    );
  }
}
