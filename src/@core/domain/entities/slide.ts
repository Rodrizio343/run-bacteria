import { IPost } from './post'

export interface ISlide {
  title: string
  brief: string
  image: string
  isActive: boolean
  category: string
  post: IPost
}

export interface ISlidesOutput {
  getSlides(): Promise<ISlide[]>
}