// news model in app
export class News {
  constructor(
    public author: string,
    public title: string,
    public points: number,
    public id: string,
    public commentsNumber: number,
    public date: Date,
    public url?: string,
    public text?: string,
    public comments?: NewsComments[]
  ) {}
}

// API response type
export interface IRes {
  hits: INews[] // news array
  hitsPerPage: number; // news per page
  nbHits: number; // all news number
  nbPages: 2; // total pages number
  page: 0; // current page
}

export interface INews {
  author: string;
  title: string;
  points: number;
  objectID: string; // news id
  num_comments: number;
  url?: string;
  text?: string;
  created_at: Date; // date news created
  children: NewsComments[]; // single news comments
}

export interface NewsComments {
  author: string;
  created_at: string;
  created_at_i: number;
  id: number;
  parent_id: number;
  children: NewsComments[];
  text: string; // text represented as HTML but string type;
}
