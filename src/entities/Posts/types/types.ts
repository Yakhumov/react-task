export interface IPosts {
    id: number;
    title: string;
    body: string;
  }
  
  export interface PostsShema{
    posts: IPosts[];
    loading?: boolean,
    error?: string
  }