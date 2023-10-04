import { IPost } from './post'

export interface ICategory {
  id: number
  name: string
  posts: IPost[]
}

export interface ICategoryOutput {
  getCategory({id}: {id: string}): Promise<ICategory>
}
