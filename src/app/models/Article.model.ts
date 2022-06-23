export class ArticleModel {
    author: string = "";
    content: string = "";
    description: string = "";
    publishedAt: string = "";
    source: {id:string, name:string} = {id:"",name:""}
    title: string = "";
    url: string = "";
    urlToImage: string = "";
}