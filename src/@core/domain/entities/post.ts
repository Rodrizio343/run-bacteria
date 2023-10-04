import { ICategory } from './category'

export interface IPost {
  id: number
  title: string
  brief: string
  content: string
  image: string
  isActive: string
  categories: ICategory[]
  date: string
  count?: number
}

export interface IPostsOutput {
  getPosts(): Promise<IPost[]>
  getPost({id}: {id: string}): Promise<IPost> 
}