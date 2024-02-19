import { IArticle } from "src/app/shared/types/article.interface";

export interface IFeedResponse{
    articles: IArticle[],
    articlesCount: number,
    
}