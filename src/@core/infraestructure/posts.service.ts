import strapi from '@/lib/strapi';
import { IPost } from '../domain/entities/post';
import { createPostAdapter, createPostsAdapter } from '../adapters/posts.adapter';

const populationFields = ['image', 'categories', 'createdBy']

export const getAllPost = async(): Promise<IPost[]> => {
  try {
    const posts = await strapi.find<IPost[]>("posts", {populate: populationFields})
    const adaptedPosts = await createPostsAdapter(posts.data)
    return adaptedPosts
  } catch (error) {
    throw (error)
  }
};

export const getInitialPosts = async(): Promise<IPost[]> => {
  try {
    const posts = await strapi.find<IPost[]>("posts", {populate: populationFields, pagination: {start: 0, limit: 5}})
    const adaptedPosts = await createPostsAdapter(posts.data)
    return adaptedPosts
  } catch (error) {
    throw (error)
  }
};

export const getMorePosts = async(offsetNumber: number): Promise<IPost[]> => {
  try {
    const posts = await strapi.find<IPost[]>("posts", {populate: populationFields, pagination: {start: offsetNumber, limit: 5}})
    const adaptedPosts = await createPostsAdapter(posts.data)
    return adaptedPosts
  } catch (error) {
    throw (error)
  }
}

export const getPostById = async(id: string): Promise<IPost> => {
  try {
    const post = await strapi.findOne<IPost>('posts', id, {populate: populationFields})
    const adaptedPost = await createPostAdapter(post.data) as IPost    
    return adaptedPost
  } catch (error) {
    throw(error)
  }
}
export const getPostsBySearch = async(text: string): Promise<IPost[]> => {
  try {
    const posts = await strapi.find<IPost[]>('posts', {filters: { $or: [{title: {$contains: text}}, {brief: {$contains: text}}, {content: {$contains: text}}]}, populate: populationFields})
    const adaptedPosts = await createPostsAdapter(posts.data)
    return adaptedPosts
  } catch (error) {
    throw(error)
  }
}

export const getPostsPaginationData = async() => {
  try {
    const posts = await strapi.find("posts")
    return  posts.meta?.pagination
  } catch (error) {
    throw (error)
  }
};
