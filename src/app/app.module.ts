import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedComponent } from './components/feed/feed.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { NewsFeedItemComponent } from './components/news-feed-item/news-feed-item.component';
import { CommentsFeedComponent } from './components/comments-feed/comments-feed.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: FeedComponent,
  },
  {
    path: 'news/:id',
    component: NewsItemComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    NewsItemComponent,
    NewsFeedItemComponent,
    CommentsFeedComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
