import { ICategory } from '@/@core/domain/entities/category'
import strapi from '@/lib/strapi'
import { createCategoryAdapter } from '@/@core/adapters/category.adapter'
import { createPostsAdapter } from '../adapters/posts.adapter'
import { IPost } from '../domain/entities/post'

export const getCategoryById = async(id: string): Promise<ICategory> => {
  try {
    const category = await strapi.findOne('categories', id, {populate: ['posts.image', 'posts.categories']})
    const adaptedCategory = await createCategoryAdapter(category) as ICategory
    const adaptedPosts = createPostsAdapter(adaptedCategory.posts)
    adaptedCategory['posts']= adaptedPosts
    return adaptedCategory
  } catch (error) {
    throw(error)
  }
}