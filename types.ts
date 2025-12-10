export interface NewsArticle {
  title: string;
  author: string;
  time: string;
  date: string;
  content: string;
  imageUrl: string;
  sourceName: string;
  sourceUrl: string;
}

export type Category = 
  | 'All News' 
  | 'India' 
  | 'Business' 
  | 'Politics' 
  | 'Sports' 
  | 'Technology' 
  | 'Startups' 
  | 'Entertainment' 
  | 'Science' 
  | 'Automobile';