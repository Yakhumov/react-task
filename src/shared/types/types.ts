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


export interface IForm{
    login: string,
    password: string
}


export interface IUser{
    imageUrl: string
    name: string,
    userId: number,
    email: string,
    phone: number  
} 
